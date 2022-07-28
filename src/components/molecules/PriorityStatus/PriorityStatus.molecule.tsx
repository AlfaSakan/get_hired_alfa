import React from "react";
import { priorityType } from "../../../constants/types.constants";
import { StatusDetail } from "../../atoms";

interface IProps {
  label: string;
  priority: priorityType;
}

const PriorityStatus: React.FC<IProps> = ({ label, priority }) => {
  return (
    <div className="flex items-center">
      <StatusDetail priority={priority} />
      <p>{label}</p>
    </div>
  );
};

export default PriorityStatus;
