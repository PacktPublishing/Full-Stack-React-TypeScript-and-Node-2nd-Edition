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

export type UserTodo = {
  id: number;
  userId: number;
  username: string;
  title: string;
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

export const getUsersTodos = async (username: string): Promise<UserTodo[]> => {
  const users = await getUsers();

  const userByUserName = users.find((usr: User) => {
    return usr.username.toLowerCase() === username;
  });

  if (userByUserName) {
    const todos = await getTodos();
    const usersTodos = todos.filter((todo: Todo) => {
      return todo.userId === userByUserName.id;
    });

    return usersTodos.map((todo) => ({
      id: todo.id,
      userId: todo.userId,
      username: userByUserName.username,
      title: todo.title,
    }));
  }
  return [];
};
