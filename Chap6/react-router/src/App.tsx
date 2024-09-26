import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomeB } from "./HomeB";
import { HomeA } from "./HomeA";
import { HomeC } from "./HomeC";

const router = createBrowserRouter([
  {
    path: "/a",
    element: <HomeA />,
    children: [
      {
        path: "c",
        element: <HomeC />,
      },
      {
        path: "c/:id",
        element: <HomeC />,
      },
    ],
  },
  {
    path: "/b",
    element: <HomeB />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
