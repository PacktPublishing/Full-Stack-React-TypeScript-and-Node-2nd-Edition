import ReactDOM from "react-dom/client";
import App from "./App.tsx";

async function deferRender() {
  if (import.meta.env.DEV) return;

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
});
