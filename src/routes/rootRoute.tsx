import MainLayout from "@/layouts/MainLayout";
import ChooseDay from "@/modules/candidate/features/choose-day";
import PickTime from "@/modules/candidate/features/pick-time";
import { RouteObject } from "react-router-dom";

export const rootRoute: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ChooseDay />,
      },
      {
        path: "/:day",
        element: <PickTime />,
      },
    ],
  },
];
