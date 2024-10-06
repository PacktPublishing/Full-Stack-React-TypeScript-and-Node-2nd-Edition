import { User } from "./Api";

export interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((usr) => (
        <UserItem key={usr.id} user={usr} />
      ))}
    </ul>
  );
}

export interface UserItemProps {
  user: User;
}

export function UserItem({ user }: UserItemProps) {
  return <li data-testid={`li-${user.id}`}>{user.name}</li>;
}
