import { PageRoute } from "../../constants/types.constants";
import DetailView from "./Detail.view";

const DetailRoute: PageRoute = {
  path: "/get_hired_alfa/detail/:idActivity",
  element: <DetailView />,
};

export default DetailRoute;
