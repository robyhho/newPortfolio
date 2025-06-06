import { MouseEventHandler } from "react";

type props = {
  color?: "red" | "yellow" | "green";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const colorMap = {
  red: "bg-red-500 hover:bg-red-600 active:bg-red-700",
  yellow: "bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600",
  green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
};
const labelMap = {
  red: "close",
  yellow: "something",
  green: "placeholder",
};

const WindowsBtn = ({ color = "red", onClick }: props) => {
  const colorClasses = colorMap[color];
  return (
    <button
      onClick={onClick}
      className={`h-2 w-2 rounded-full  shadow-inner ${colorClasses}`}
      aria-label={`${labelMap[color]}`}
    />
  );
};

export default WindowsBtn;
