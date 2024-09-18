import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Home, { UserType } from "./Home";

function App() {
  const [id, setId] = useState("");
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const idToGet = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(idToGet).then((result) => {
      result.json().then((users) => {
        console.log("users updated", users);
        setUsers(Array.isArray(users) ? users : [users]);
      });
    });
  }, [id, users]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    <>
      id: <input type="text" value={id} onChange={onChange} />
      <Home users={users} />
    </>
  );
}

export default App;
