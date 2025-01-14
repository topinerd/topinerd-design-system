import { RadioGroup, RadioGroupItem } from "./radio-card";

export default { title: "Components/RadioCard" };

export const Default = () => {
  return (
    <RadioGroup
      style={{
        display: "flex",
        gap: "4px",
      }}
    >
      <RadioGroupItem value="default">제한 있음</RadioGroupItem>
      <RadioGroupItem value="secondary">제한 없음</RadioGroupItem>
    </RadioGroup>
  );
};
