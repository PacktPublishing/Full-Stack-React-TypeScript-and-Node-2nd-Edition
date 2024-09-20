import { Suspense } from "react";
import Fetcher from "./Fetcher";
import { UserType } from "./Home";

interface AwaitableProps {
  fetchPromise?: Promise<UserType[]>;
}

export default function Awaitable({ fetchPromise }: AwaitableProps) {
  return (
    <Suspense fallback={<div>Loading users ...</div>}>
      {fetchPromise ? <Fetcher fetchPromise={fetchPromise} /> : null}
    </Suspense>
  );
}
