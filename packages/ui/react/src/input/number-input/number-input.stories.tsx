import { NumberInput } from "./number-input";

export default { title: "Components/Input/NumberInput" };

export const Default = () => {
  return <NumberInput adornment="명" max={10} min={3} defaultValue={5} />;
};

export const CustomChangeHandler = () => {
  return (
    <NumberInput
      adornment="명"
      max={10}
      min={0}
      onValueChange={value => console.log(value)}
    />
  );
};
