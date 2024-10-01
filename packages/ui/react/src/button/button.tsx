import React from 'react';
import { button } from './button.css';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={button}>{children}</button>
}

export { Button }

Button.displayName = 'Button';