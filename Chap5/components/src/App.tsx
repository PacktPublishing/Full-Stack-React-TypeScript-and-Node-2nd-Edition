import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Home, { UserType } from "./Home";
import DeferredValue from "./DeferredValue";
import Transitioner from "./Transitioner";
import UserForm from "./UserForm";
import { OptimisticMessages } from "./OptimisticMessages";

async function fetchData(url: string) {
  const response = await fetch(url);
  const users = await response.json();
  return (Array.isArray(users) ? users : [users]) as UserType[];
}

function App() {
  const [id, setId] = useState("");
  const [usersPromise, setUsersPromise] = useState<Promise<UserType[]>>();

  useEffect(() => {
    const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
    setUsersPromise(fetchData(idToGet));
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <>
      <UserForm />
    </>
  );
}

export default App;
