import {
  useOptimistic,
  useState,
  MouseEvent,
  ChangeEvent,
  useTransition,
} from "react";

type Message = { id: number; message: string };

export function OptimisticMessages() {
  const [message, setMessage] = useState("");
  const [messagesRetrievedFromApi, setMessagesRetrievedFromApi] = useState<
    Message[]
  >([]);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messagesRetrievedFromApi, (currentMessages, message) => {
    return [...currentMessages, { id: currentMessages.length + 1, message }];
  });

  const [_isPending, startTransition] = useTransition();

  const addNonOptimisticMessage = async (message: string) => {
    await new Promise((res) =>
      setTimeout(() => {
        const id = messagesRetrievedFromApi.length + 1;
        console.log("updating messagesRetrievedFromApi with id!", id);
        setMessagesRetrievedFromApi([
          ...messagesRetrievedFromApi,
          {
            id,
            message,
          },
        ]);
        setMessage("");

        res(null);
      }, 2000)
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    startTransition(async () => {
      addOptimisticMessage(message);
      await addNonOptimisticMessage(message);
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
