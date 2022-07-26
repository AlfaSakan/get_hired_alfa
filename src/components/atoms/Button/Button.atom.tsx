import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

interface IButton {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const Button: React.FC<IButton> = ({
  onClick,
  text,
  type,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <button className="bg-backgroundColor flex items-center rounded-full py-[13.5px] px-7">
        <AddRoundedIcon style={{ fill: "white" }} />
        <p className="ml-3 text-lg font-semibold text-white">Loading...</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-lightBlue flex items-center rounded-full py-[13.5px] px-7"
      type={type}
    >
      <AddRoundedIcon style={{ fill: "white" }} />
      <p className="ml-3 text-lg font-semibold text-white">{text}</p>
    </button>
  );
};

export default Button;
