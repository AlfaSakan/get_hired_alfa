import { PageRoute } from "../../constants/types.constants";
import DetailView from "./Detail.view";

const DetailRoute: PageRoute = {
  path: "/detail/:idActivity",
  element: <DetailView />,
};

export default DetailRoute;
