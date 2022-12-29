import React from "react";

interface IButtonProps {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}

function SmallButton(props: IButtonProps) {
  return (
    <div
      onClick={props.handleClick}
      className="border border-orange-900 w-8  h-8 text-center flex flex-col items-center justify-center rounded-md bg-orange-700 text-white shadow-lg hover:bg-orange-400 hover:cursor-pointer"
    >
      <button>{props.children}</button>
    </div>
  );
}

export default SmallButton;
