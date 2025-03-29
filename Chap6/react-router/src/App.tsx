import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import { HomeA } from "./HomeA";
import { HomeB } from "./HomeB";
import { HomeC } from "./HomeC";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/a" element={<HomeA />}>
          <Route path="c/:id?" element={<HomeC />} />
        </Route>
        <Route path="/b" element={<HomeB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
