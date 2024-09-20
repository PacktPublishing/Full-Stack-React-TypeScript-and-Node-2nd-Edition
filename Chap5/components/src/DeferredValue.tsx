import { ChangeEvent, useDeferredValue, useState } from "react";

export default function DeferredValue() {
  const [inputValue, setInputValue] = useState("");
  const [greeting, setGreeting] = useState("hello");
  const deferredGreeting = useDeferredValue(greeting);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => setGreeting(`Hi, ${e.target.value}`), 2000);

    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <span>{deferredGreeting}</span>
    </div>
  );
}
