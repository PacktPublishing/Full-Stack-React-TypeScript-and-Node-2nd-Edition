import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Home, { UserType } from "./Home";

function App() {
  const [label, setLabel] = useState("");
  const [users, setUsers] = useState<UserType[]>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${label}`).then(
      (result) => {
        result.json().then((users) => {
          setUsers(users);
        });
      }
    );
  }, [label]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      id: <input type="text" value={label} onChange={onChange} />
      <Home users={users} />
    </>
  );
}

export default App;
