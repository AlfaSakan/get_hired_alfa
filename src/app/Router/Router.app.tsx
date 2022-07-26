import React from "react";
import { Route, Routes } from "react-router-dom";
import routerConfig from "../../configs/router/router.config";

export default function RouterApp() {
  return (
    <Routes>
      {routerConfig.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
