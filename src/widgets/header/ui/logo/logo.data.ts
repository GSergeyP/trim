import type { IDataImg } from "@/shared/ui/img";

const URL = import.meta.env.VITE_API_BASE_IMG_URL + "common/";

const data: IDataImg = {
  src: {
    xx: URL + "logo_b.png",
    xl: URL + "logo_b.png",
    lg: URL + "logo_b.png",
    md: URL + "logo_b.png",
    sm: URL + "logo_s.png",
    xs: URL + "logo_s.png",
  },
  alt: "trlm.ru - Автозапчасти. Логотип.",
};

export { data };
