import { useState, useTransition, MouseEvent, useEffect } from "react";
import { UserType } from "./Home";

enum SelectedItem {
  Default,
  Users,
  Message,
}

export default function Transitioner() {
  const [selectedItem, setSelectedItem] = useState(SelectedItem.Default);
  const [_isPending, startTransition] = useTransition();

  const onClickUsers = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    startTransition(async () => {
      setSelectedItem(SelectedItem.Users);
    });
  };

  const onClickMessage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    startTransition(async () => {
      setSelectedItem(SelectedItem.Message);
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <button onClick={onClickUsers}>get users</button>

        <button onClick={onClickMessage}>show message</button>
      </div>
      <div>
        {selectedItem === SelectedItem.Default && <div>Start here</div>}{" "}
        {selectedItem === SelectedItem.Users && <UsersLoader />}
        {selectedItem === SelectedItem.Message && <ShowMessage />}
      </div>
    </div>
  );
}

export function UsersLoader() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const users = [];
    for (let i = 0; i < 200; i++) {
      users.push({
        userId: i,
        id: i,
        title: "Title" + i,
        body: "Body" + i,
      });
    }
    setUsers(users);
  }, []);

  return (
    <>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
}

export function UserItem({ user }: { user: UserType }) {
  const start = Date.now();
  while (Date.now() - start < 10) {}
  return <div>{user.title}</div>;
}

export function ShowMessage() {
  return <div>Interrupt!</div>;
}
