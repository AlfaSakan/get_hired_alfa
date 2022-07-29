import React from "react";
import { PageRoute } from "../../constants/types.constants";
import HomeView from "./Home.view";

const HomeRoute: PageRoute = {
  path: "/get_hired_alfa",
  element: <HomeView />,
};

export default HomeRoute;
