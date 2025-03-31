type User = {
  id: number;
  userName: string;
  fullName: string;
};

export let allUsers: User[] = [];

export function newUser(id: number, userName: string, fullName: string): User {
  const user = {
    id,
    userName,
    fullName,
  };
  allUsers.push(user);
  return user;
}

export function getUser(id: number) {
  return allUsers.find((usr) => usr.id === id);
}

export function getLatestId() {
  return Math.max(...allUsers.map((usr) => usr.id)) + 1;
}
