import "react-router";

const ROUTES = {
  HOME: "/",
  SPARE_PARTS: "/spare_parts",
  DELIVERY: "/delivery",
  HOW_BUY: "/how_buy",
  PAY: "/pay",
  STOCKS: "/stocks",
  CONTACTS: "/contacts",
  OFFER_AGREEMENT: "/offer_agreement",
  PRIVACY_POLICY: "/privacy_policy",
  REQUISITES: "/requisites",
} as const;

const ROUTES_TITLE = {
  HOME: "Главная",
  SPARE_PARTS: "Подбор запчастей",
  DELIVERY: "Доставка",
  HOW_BUY: "Как купить",
  PAY: "Оплата",
  STOCKS: "Акции",
  CONTACTS: "Контакты",
  OFFER_AGREEMENT: "Договор оферты",
  PRIVACY_POLICY: "Политика конфиденциальности",
  REQUISITES: "Реквизиты",
};

export { ROUTES, ROUTES_TITLE };
