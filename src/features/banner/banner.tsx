import { memo, useEffect, useMemo, useState } from "react";
import { editingData } from "@/shared/lib/editing-data";
import { getBanner } from "@/entities/get-banner";
import { useDevice } from "@/shared/lib/useDevice";

import type { IBanner } from "./banner.type";
import Tags from "@/shared/ui/tags";
import Links from "@/shared/ui/links";

function Banner(props: IBanner) {
  const {
    bannerBlockAttr,
    bannerLinkAttr,
    bannerLinkData,
    children,
    position,
  } = props;
  const banner = getBanner(editingData(position) as Record<string, string>);
  const [mount, setMount] = useState<Record<string, any>>({});
  const device = useDevice();
  const URL = import.meta.env.VITE_API_BASE_BANNER_IMG_URL;

  useEffect(() => {
    if (banner) setMount(banner);
  }, [banner]);

  const attr = useMemo(() => {
    const data = mount.data;
    let attr: Record<string, any>;
    
    if (data) {
      if (Array.isArray(data))
        attr = {
          ...bannerBlockAttr,
          bgImage: `url(${URL + data[0].url[device]})`,
        };
      else if (Object.keys(mount.data).length > 0)
        attr = {
          ...bannerBlockAttr,
          bgImage: `url(${URL + data.url[device]})`,
        };
      else attr = bannerBlockAttr;
    } else attr = bannerBlockAttr;
    return attr;
  }, [URL, bannerBlockAttr, device, mount.data]);

  return (
    <>
      {mount.isLoading ? (
        "...isLoading"
      ) : mount.data ? (
        <Tags tags="section" attr={attr}>
          <Links attr={bannerLinkAttr} data={bannerLinkData} />
          <>{children}</>
        </Tags>
      ) : (
        "error"
      )}
    </>
  );
}

export const Component = memo(Banner);
