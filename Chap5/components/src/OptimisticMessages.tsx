import {
  useOptimistic,
  useState,
  MouseEvent,
  ChangeEvent,
  useTransition,
  useEffect,
} from "react";
import { Message, messagesOnApi } from "./MessagesData";

export function OptimisticMessages() {
  const [messagesRetrievedFromApi, setMessagesRetrievedFromApi] = useState<
    Message[]
  >([]);
  const [message, setMessage] = useState("");
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messagesRetrievedFromApi, (currentMessages, message) => {
    const finalMessages = [
      ...currentMessages,
      { id: getNextId(currentMessages), message },
    ];
    return finalMessages;
  });
  const [_isPending, startTransition] = useTransition();

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(messagesOnApi));
    setMessagesRetrievedFromApi(data);
  }, []);

  const addMessage = async (message: string) => {
    addOptimisticMessage(message);
    await new Promise((res) =>
      setTimeout(() => {
        messagesOnApi.push({
          id: getNextId(messagesOnApi),
          message,
        });
        res(null);
      }, 2000)
    );

    const data = JSON.parse(JSON.stringify(messagesOnApi));
    setMessagesRetrievedFromApi(data);
    setMessage("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    startTransition(() => {
      addMessage(message);
    });
  };

  return (
    <div>
      <input value={message} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul style={{ listStyleType: "none" }}>
        {optimisticMessages.map((m, i) => (
          <li key={i}>{m.message}</li>
        ))}
      </ul>
    </div>
  );
}

function getNextId(currentMessages: Message[]) {
  let id = 0;
  for (let i = 0; i < currentMessages.length; i++) {
    if (currentMessages[i].id > id) id = currentMessages[i].id;
  }
  id += 1;
  return id;
}
