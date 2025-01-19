import { inputContainer } from "./input-container.css";
import type { PropsWithChildren } from "react";

interface InputContainerProps extends PropsWithChildren {}

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return <div className={inputContainer}>{children}</div>;
};

export { InputContainer };
