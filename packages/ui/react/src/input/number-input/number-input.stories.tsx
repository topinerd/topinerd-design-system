import { NumberInput } from "./number-input";

export default { title: "Components/Input/NumberInput" };

export const Default = () => {
  return <NumberInput adornment="명" max={10} min={0} defaultValue={1} />;
};
