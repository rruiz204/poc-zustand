import { createBrowserRouter } from "react-router-dom";
import Home from "./modules/Home";

import Global from "./modules/global";
import GlobalLeft from "./modules/global/components/GlobalLeft";
import GlobalRight from "./modules/global/components/GlobalRight";

import Actions from "./modules/actions";

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> },

  {
    path: "/global", element: <Global></Global>,
    children: [
      { path: "left", element: <GlobalLeft></GlobalLeft> },
      { path: "right", element: <GlobalRight></GlobalRight> }
    ]
  },

  { path: "/actions", element: <Actions></Actions> }
]);

export default router;