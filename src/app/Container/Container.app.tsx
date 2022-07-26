import { BrowserRouter } from "react-router-dom";
import RouterApp from "../Router/Router.app";

export default function Container() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}
