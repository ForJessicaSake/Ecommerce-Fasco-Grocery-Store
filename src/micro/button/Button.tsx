import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode | string;
  disabled?: boolean;
};
const Button = ({ className, children, disabled }: Props) => {
  return (
    <button className={`bg-primary text-white lg:max-w-sm max-w-[150px] py-2 rounded-md  ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
