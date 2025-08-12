import { Spinner } from "./Spinner";

interface ValidationProgressMsgProps {
  validationMsg: string;
  progressStartMsg: string;
}

export function ValidationAndProgressMsg({
  validationMsg,
  progressStartMsg,
}: ValidationProgressMsgProps) {
  return (
    <>
      {validationMsg ? (
        <>
          <span style={{ color: "var(--warning-cl)" }}>{validationMsg}</span>
          {validationMsg === progressStartMsg ? (
            <Spinner size={18} style={{ marginLeft: "1em" }} />
          ) : null}
        </>
      ) : null}
    </>
  );
}
