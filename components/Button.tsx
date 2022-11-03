import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        ${className} group transition transition-color font-semibold flex justify-between bg-green hover:bg-green/60 hover:scale-105 w-full max-w-[180px] py-2 px-8 rounded-full border-2 border-black
      `}
    >
      <p className="pr-4">{children}</p>
      <span className="ml-4transition-all transition group-hover:translate-x-1">
        &#8594;
      </span>
    </button>
  );
};

export default Button;
