import React from "react";

interface IButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
}

function Button(props: IButtonProps) {
  return (
    <div className="border border-blue-900 w-24 h-10 text-center flex flex-col items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg hover:bg-sky-700 hover:cursor-pointer">
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;
