import "./theme/base.css";
import "./theme/components.css";
import "./theme/pages.css";
import "./theme/mdxeditor.css";
import "./theme/layout.css";
import "./theme/animations.css";
import "./theme/select.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./lib/redux/Store";
import { BrowserRouter, Route, Routes } from "react-router";
import { Explorer } from "./pages/explorer/Explorer";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Explorer />} />
          {/* <Route path="/write" element={<Write />}>
            <Route path="new" element={<WriteStory />} />
            <Route
              path="edit/:work_id/:validation_msg?"
              element={<WriteStory />}
            />
            <Route path="manage" element={<ManageStories />} />
          </Route>
          <Route path="/aread/followed" element={<ReadFollowed />} />
          <Route path="/read/:work_id" element={<ReadStory />} />
          <Route path="/explorer/:topic_id?" element={<Explorer />} />
          <Route
            path="/profile/:profile_id/:page_sec_id?"
            element={<Profile />}
          /> */}
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
