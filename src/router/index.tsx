import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ManageLayout from "../layouts/ManageLayout";
import My from "../pages/manage/My";
import Collect from "../pages/manage/Collect";
import Like from "../pages/manage/Like";
import Tutorial from "../pages/Tutorial";
import Feedback from "../pages/Feedback";
import Download from "../pages/Download";
import ScriptTutorial from "../pages/ScriptTutorial";
import Price from "../pages/Price";
import NotionTutorial from "../pages/NotionTutorial";
import ImageHostTutorial from "../pages/ImageHostTutorial";
import HomepageTutorial from "../pages/HomepageTutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "my",
            element: <My />,
          },
          {
            path: "collect",
            element: <Collect />,
          },
          {
            path: "like",
            element: <Like />,
          },
        ],
      },
      {
        path: "download",
        element: <Download />,
      },
      {
        path: "tutorial",
        element: <Tutorial />,
      },
      {
        path: "notionTutorial",
        element: <NotionTutorial />,
      },
      {
        path: "imageHostTutorial",
        element: <ImageHostTutorial />,
      },
      {
        path: "scriptTutorial",
        element: <ScriptTutorial />,
      },
      {
        path: "price",
        element: <Price />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "homepageTutorial",
        element: <HomepageTutorial />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

export const HOME_PATHNAME = "/";
export const MANAGE_PATHNAME = "/manage";
export const SCRIPT_TUTORIAL = "/scriptTutorial";
export const TUTORIAL_PATHNAME = "/tutorial";
export const FEEDBACK_PATHNAME = "/feedback";
export const DOWNLOAD_PATHNAME = "/download";
export const PRICE_PATHNAME = "/price";
export const NOTION_TUTORIAL = "/notionTutorial";
export const IMAGE_HOST_TUTORIAL = "/imageHostTutorial";
export const HOMEPAGE_TUTORIAL = "/homepageTutorial";
