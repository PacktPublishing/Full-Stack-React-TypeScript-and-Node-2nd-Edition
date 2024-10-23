import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    throw new Error("An unexpected error has occurred!");
  }, []);

  return <div>Hello world</div>;
}
