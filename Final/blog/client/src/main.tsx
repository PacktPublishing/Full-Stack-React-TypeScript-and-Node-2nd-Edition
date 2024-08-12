import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
