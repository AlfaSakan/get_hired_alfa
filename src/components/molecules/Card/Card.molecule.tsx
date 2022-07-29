import React from "react";
import { ActivityModel } from "../../../models/Activity/Activity.model";
import { formatDate } from "../../../utils/formatDate";
import { DeleteButton } from "../../atoms";

interface IProps {
  activity: ActivityModel;
  onRemove?: () => void;
  index: number;
  onNavigateDetail?: () => void;
}

const Card: React.FC<IProps> = ({
  activity,
  onRemove = () => {},
  index,
  onNavigateDetail,
}) => {
  return (
    <div
      className="w-[234px] h-[234px] bg-white shadow-lg rounded-xl pl-[27px] pr-[26px] pt-[22px] pb-[25px] cursor-pointer mr-4 mb-4"
      // data-cy={`activity-item-${index}`}
      data-cy="activity-item"
      onClick={onNavigateDetail}
    >
      <div className="flex flex-col justify-between h-full">
        <p className="font-bold text-lg" data-cy="activity-item-title">
          {activity.title}
        </p>
        <div className="flex justify-between items-end">
          <p
            className="font-medium text-base text-lightGray"
            data-cy="activity-item-date"
          >
            {formatDate(new Date(activity.created_at))}
          </p>
          <DeleteButton
            onRemove={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            dataCy="activity-item-delete-button"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
