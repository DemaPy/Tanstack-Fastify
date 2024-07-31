export class TodoService {
  static getAll = async () => {
    const response = await fetch("http://localhost:3000/todos");
    if (!response.ok) {
      throw new Error("Fetching todos failde");
    }
    const todos: { data: Todo[] } = await response.json();
    return todos;
  };
}
