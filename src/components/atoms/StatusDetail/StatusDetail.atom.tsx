import React from "react";
import { priorityType } from "../../../constants/types.constants";

interface IProps {
  priority: priorityType;
}

const StatusDetail: React.FC<IProps> = ({ priority }) => {
  let styleColor: string;

  switch (priority) {
    case "low":
      styleColor = "bg-bluePriority";
      break;
    case "very-low":
      styleColor = "bg-purplePriority";
      break;
    case "normal":
      styleColor = "bg-greenPriority";
      break;
    case "high":
      styleColor = "bg-yellowPriority";
      break;
    case "very-high":
      styleColor = "bg-redPriority";
      break;
    default:
      styleColor = "bg-bluePriority";
      break;
  }

  return <div className={`h-3 w-3 rounded-full ${styleColor} mr-4`} />;
};

export default StatusDetail;
