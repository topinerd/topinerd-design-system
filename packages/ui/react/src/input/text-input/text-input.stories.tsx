import {
  IconArrowdownDisableFill,
  IconArrowdownLine,
} from "@topinerd-design-system/react-icons";
import { TextInput } from "./text-input";

export default { title: "Components/Input/TextInput" };

export const Default = () => {
  return (
    <TextInput
      placeholder="hello"
      leftIcon={<IconArrowdownDisableFill />}
      rightIcon={<IconArrowdownLine />}
    />
  );
};
