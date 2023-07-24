import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
};
const Button = ({ className, children, disabled }: Props) => {
  return (
    <button className={`bg-primary text-white rounded-md  ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
