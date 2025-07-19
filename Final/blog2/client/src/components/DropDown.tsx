export type OptionType = {
  name: string;
  value: any;
};

interface DropDownProps {
  keyName: string;
  label: string;
  optionItems: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: any;
  name?: string;
}

export default function DropDown({
  keyName,
  label,
  optionItems,
  onChange,
  value,
  name,
}: DropDownProps) {
  return (
    <div>
      <span>{label}</span>
      <div className="select" style={{ marginTop: ".5em" }}>
        <select name={name} value={value} onChange={onChange}>
          {optionItems.map((item) => (
            <option
              key={`${keyName}-opt-${item.name}-${item.value}`}
              label={item.name}
            >
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
