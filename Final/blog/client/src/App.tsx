import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./theme/base.css";
import "./theme/components.css";
import "./theme/pages.css";
import "./theme/mdxeditor.css";
import "./theme/layout.css";
import "./theme/animations.css";
import "./theme/select.css";
import { Explorer } from "./pages/explorer/Explorer";
import { WriteStory } from "./pages/write/WriteStory";
import { ManageStories } from "./pages/write/ManageStories";
import { Write } from "./pages/write/Write";
import { ReadFollowed } from "./pages/read/ReadFollowed";
import { ReadStory } from "./pages/read/ReadStory";
import { Profile } from "./pages/Profile";
import UiApiProvider from "./common/context/ui-api/UiApiContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./common/redux/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Explorer />,
  },
  {
    path: "/write",
    element: <Write />,
    children: [
      {
        path: "new",
        element: <WriteStory />,
      },
      {
        path: "edit/:work_id/:validation_msg?",
        element: <WriteStory />,
      },
      {
        path: "manage",
        element: <ManageStories />,
      },
    ],
  },
  {
    path: "/read/followed",
    element: <ReadFollowed />,
  },
  {
    path: "/read/:work_id",
    element: <ReadStory />,
  },
  {
    path: "/explorer/:topic_id?",
    element: <Explorer />,
  },
  {
    path: "/profile/:profile_id/:page_sec_id?",
    element: <Profile />,
  },
]);

function App() {
  return (
    <ReduxProvider store={store}>
      <UiApiProvider>
        <RouterProvider router={router} />;
      </UiApiProvider>
    </ReduxProvider>
  );
}

export default App;
