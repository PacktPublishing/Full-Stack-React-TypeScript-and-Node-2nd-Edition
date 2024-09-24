import { useActionState } from "react";
import { UserType } from "./Home";
import { users } from "./UserData";
import SubmitButton from "./SubmitButton";

export default function UserForm() {
  const [_formState, action, isPending] = useActionState(
    async (_previousArgs: UserType, formData: FormData) => {
      const user: UserType = {
        userId: Number(formData.get("userId")?.toString() || 0),
        id: Number(formData.get("id")?.toString() || 0),
        title: formData.get("title")?.toString() || "",
        body: formData.get("body")?.toString() || "",
      };

      const start = Date.now();
      while (Date.now() - start < 1000) {}
      users.push(user);

      return user;
    },
    {
      userId: 0,
      id: 0,
      title: "",
      body: "",
    }
  );

  return (
    <form
      action={action}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="userId" style={{ marginRight: "5px" }}>
          UserId
        </label>
        <input id="userId" name="userId" />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="id" style={{ marginRight: "5px" }}>
          Id
        </label>
        <input id="id" name="id" />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="title" style={{ marginRight: "5px" }}>
          Title
        </label>
        <input id="title" name="title" />
      </div>
      <div
        style={{
          width: "250px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label htmlFor="body" style={{ marginRight: "5px" }}>
          Body
        </label>
        <input id="body" name="body" />
      </div>
      <SubmitButton />
      {JSON.stringify(users)}
    </form>
  );
}