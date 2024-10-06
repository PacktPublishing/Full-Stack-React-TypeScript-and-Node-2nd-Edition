import { use } from "react";
import { Todo } from "./Api";

interface UserTodosProps {
  todosPromise: Promise<Todo[]> | null;
}

const UserTodos = ({ todosPromise }: UserTodosProps) => {
  const todos = todosPromise && use(todosPromise);

  return (
    <ul style={{ marginTop: "1rem", listStyleType: "none" }}>
      {todos?.map((todo: Todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default UserTodos;
