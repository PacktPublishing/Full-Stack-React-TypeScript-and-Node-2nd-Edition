import { use } from "react";
import { UserTodo } from "./Api";

interface UserTodosProps {
  todosPromise: Promise<UserTodo[]> | null;
}

const UserTodos = ({ todosPromise }: UserTodosProps) => {
  const todos = todosPromise && use(todosPromise);

  return (
    <>
      <div>{todos && todos[0].username}</div>
      <ul style={{ marginTop: "1rem", listStyleType: "none" }}>
        {todos?.map((todo: UserTodo) => {
          console.log("todo:", todo);
          return (
            <li key={todo.id}>
              <div>{todo.title}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserTodos;
