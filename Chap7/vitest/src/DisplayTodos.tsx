import {
  ChangeEvent,
  MouseEvent,
  Suspense,
  useState,
  useTransition,
} from "react";
import UserTodos from "./UserTodos";
import { getUsersTodos } from "./Api";

const DisplayTodos = () => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");
  const [todoControl, setTodoControl] =
    useState<ReturnType<typeof UserTodos>>();
  const [_isPending, startTransition] = useTransition();

  const onChangeTxt = (e: ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };

  const onClickShowMsg = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setMsg(`Welcome to React testing, ${txt}`);
    startTransition(async () => {
      setTodoControl(<UserTodos todosPromise={getUsersTodos(txt)} />);
    });
  };

  return (
    <form>
      <div>
        <label>Enter your username</label>
      </div>
      <div>
        <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
      </div>
      <div>
        <button data-testid="input-submit" onClick={onClickShowMsg}>
          Show Message & Data
        </button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
      <Suspense fallback={<div>Loading user's todos ...</div>}>
        {todoControl}
      </Suspense>
    </form>
  );
};

export default DisplayTodos;
