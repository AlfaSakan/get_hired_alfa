import { statusType, priorityType } from "../../constants/types.constants";

export interface TodoModel {
    id: number;
    activity_group_id: number;
    is_active: statusType;
    priority: priorityType;
    title: string;
}