import { useActionState } from "react";
import "./App.css";
import { useProfile } from "./store/profile/ProfileHooks";
import { ThemeDisplay } from "./ThemeDisplay";
import ThemeProvider from "./ThemeContext";

type Login = {
  email: string;
  password: string;
};

function App() {
  const [profile, setProfile] = useProfile();
  const [_formState, action, isPending] = useActionState(
    async (_prevArgs: Login, formData: FormData) => {
      const loginUser = {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
      };
      const start = Date.now();
      while (Date.now() - start < 1000) {}

      setProfile({
        id: "1",
        userName: "dave",
        fullName: "Dave Choi",
        email: formData.get("email")?.toString() || "",
        description: "I am a programmer",
      });

      return loginUser;
    },
    { email: "", password: "" }
  );

  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  );
}

export default App;
