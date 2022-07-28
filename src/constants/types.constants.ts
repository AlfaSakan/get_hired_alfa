import { RouteObject } from "react-router-dom";

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type PageRoute = Required<Pick<RouteObject, "path" | "element">>;

export type statusType = 0 | 1;

export type priorityType =
  | "low"
  | "very-low"
  | "high"
  | "normal"
  | "very-high"
  | string;
