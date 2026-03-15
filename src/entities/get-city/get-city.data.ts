import type { TApi } from "@/shared/api";

const data: TApi = {
  method: "GET",
  URL: import.meta.env.VITE_API_BASE_CITY_URL,
};

export { data };
