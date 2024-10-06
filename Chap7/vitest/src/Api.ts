export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);

  if (response.ok) {
    const users: User[] = await response.json();
    return users;
  }

  return [];
}

export async function getTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const response = await fetch(url);

  if (response.ok) {
    const todos: Todo[] = await response.json();
    return todos;
  }
  return [];
}
