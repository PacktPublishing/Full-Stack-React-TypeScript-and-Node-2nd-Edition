import { useActionState } from "react";
import "./App.css";
import { useProfile } from "./store/profile/ProfileHooks";

type Login = {
  email: string;
  password: string;
};

function App() {
  const [profile, setProfile] = useProfile();
  const [_formState, action, isPending] = useActionState(
    (_prevArgs: Login, formData: FormData) => {
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
    <>
      <form action={action}>
        <div>
          <label htmlFor="email">email</label>
          <input id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" disabled={isPending}>
          submit
        </button>
      </form>
      <br />
      {profile && JSON.stringify(profile)}
    </>
  );
}

export default App;
