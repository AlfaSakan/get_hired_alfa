import { RouteObject } from "react-router-dom";

export type Required<T> = {
    [P in keyof T]-?: T[P];
  };

export type PageRoute = Required<Pick<RouteObject, 'path' | 'element'>>