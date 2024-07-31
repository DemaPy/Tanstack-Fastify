import Fastify from "fastify";
import cors from "cors";
import express from "@fastify/express";
import { v4 as uuidv4 } from "uuid";

const fastify = Fastify({
  logger: true,
});

var corsOptions = {
  origin: "http://localhost:5174",
  credentials: true,
  methods: "GET,PUT,POST,OPTIONS,DELETE,PATCH",
  allowedHeaders: "Content-Type,Authorization",
};
await fastify.register(express);
fastify.use(cors(corsOptions));

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

const todos = [
  {
    id: uuidv4(),
    title: "Server todo",
  },
];
fastify.get("/todos", async function handler(request, reply) {
  return { data: todos };
});

fastify.route({
  method: "GET",
  url: "/todos/:id",
  schema: {
    params: {
      id: { type: "string" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          todo: {
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
            },
          },
        },
      },
    },
  },
  handler: async (request, reply) => {
    const todo = todos.find((item) => item.id === request.params.id);
    return {
      todo: todo,
    };
  },
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
