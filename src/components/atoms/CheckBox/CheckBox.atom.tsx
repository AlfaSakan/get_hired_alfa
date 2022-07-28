import React from "react";

interface IProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const CheckBox: React.FC<IProps> = ({ onChange, value }) => {
  return (
    <input
      checked={value}
      type="checkbox"
      className="mr-[22px] rounded-none cursor-pointer"
      onChange={(e) => onChange(e.target.checked)}
    />
  );
};

export default CheckBox;
