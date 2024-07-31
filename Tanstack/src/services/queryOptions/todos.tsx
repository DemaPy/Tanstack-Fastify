import { queryOptions } from "@tanstack/react-query";
import { TodoService } from "../Todo";

export function groupQueryTodos() {
    return queryOptions({
        queryKey: ['todos'],
        queryFn: TodoService.getAll,
    })
}