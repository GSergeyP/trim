import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router";
import App from "./app";

const router = createBrowserRouter([
  {
    element: <App />,
    HydrateFallback: () => null,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("@/pages/home/home.page"),
      },
      {
        path: ROUTES.SPARE_PARTS,
        lazy: () => import("@/pages/spare-parts/spare-parts.page"),
      },
      {
        path: ROUTES.DELIVERY,
        lazy: () => import("@/pages/delivery/delivery.page"),
      },
      {
        path: ROUTES.HOW_BUY,
        lazy: () => import("@/pages/how-buy/how-buy.page"),
      },
      {
        path: ROUTES.PAY,
        lazy: () => import("@/pages/pay/pay.page"),
      },
      {
        path: ROUTES.STOCKS,
        lazy: () => import("@/pages/stocks/stocks.page"),
      },
      {
        path: ROUTES.CONTACTS,
        lazy: () => import("@/pages/contacts/contacts.page"),
      },
      {
        path: ROUTES.OFFER_AGREEMENT,
        lazy: () => import("@/pages/offer-agreement/offer-agreement.page"),
      },
      {
        path: ROUTES.PRIVACY_POLICY,
        lazy: () => import("@/pages/privacy-policy/privacy-policy.page"),
      },
      {
        path: ROUTES.REQUISITES,
        lazy: () => import("@/pages/requisites/requisites.page"),
      },
    ],
  },
]);

export { router };
