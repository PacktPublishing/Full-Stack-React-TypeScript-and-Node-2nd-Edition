import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import submitBtn from "../../theme/assets/app-icons/submit-btn.png";

interface ReturnEnabledInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  submit?: (value: string) => Promise<void>;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export function ReturnEnabledInput({
  value,
  onChange,
  placeholder,
  submit,
  onBlur,
}: ReturnEnabledInputProps) {
  const onKeyUp = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!submit) return;

    if (e.key === "Enter") {
      await submit(value);
    }
  };

  const onClick = async (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    submit && (await submit(value));
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        className="profile-form-item"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {submit ? (
        <img
          src={submitBtn}
          style={{
            width: "1.3em",
            height: "1.3em",
            marginLeft: "-1.5em",
            cursor: "pointer",
          }}
          onClick={onClick}
        />
      ) : null}
    </div>
  );
}
