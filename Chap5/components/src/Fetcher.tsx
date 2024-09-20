import { use } from "react";
import { UserType } from "./Home";

interface FetcherProps {
  fetchPromise: Promise<UserType[]>;
}

export default function Fetcher({ fetchPromise }: FetcherProps) {
  const users = use(fetchPromise);

  return (
    <>
      {users?.map((user) => {
        return (
          <div
            key={user?.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div>id: {user?.id}</div>
            <div>title: {user?.title}</div>
          </div>
        );
      })}
    </>
  );
}
