import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  isPrefix?: boolean;
  color?: string;
  isBgColorDark?: boolean;
  dataCy?: string;
  disabled?: boolean;
  onFocus?: () => void;
}

const Button: React.FC<IButton> = ({
  onClick,
  text,
  type,
  isLoading = false,
  isPrefix = true,
  color = "bg-lightBlue",
  isBgColorDark = true,
  dataCy,
  disabled = false,
  onFocus = () => {},
}) => {
  if (isLoading) {
    return (
      <button
        data-cy={dataCy}
        className="bg-backgroundColor flex items-center rounded-full py-[13.5px] px-7"
      >
        <AddRoundedIcon style={{ fill: "white" }} />
        <p className="ml-3 text-lg font-semibold text-white">Loading...</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full py-[13.5px] px-7 ${color}`}
      type={type}
      data-cy={dataCy}
      disabled={disabled}
      onFocus={onFocus}
    >
      {isPrefix && (
        <div className="mr-3">
          <AddRoundedIcon style={{ fill: "white" }} />
        </div>
      )}
      <p
        className={`text-lg font-semibold ${
          isBgColorDark ? "text-white" : "text-dark"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default Button;
