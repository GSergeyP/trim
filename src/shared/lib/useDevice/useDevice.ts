import { useEffect, useState } from "react";
import { Device, Breakpoint } from "./useDevice.const";

const useDevice = () => {
  const [clientWidth, setClientWidth] = useState<number>(
    document.body.clientWidth,
  );

  useEffect(() => {
    const getClientWidth = () => {
      setClientWidth(document.body.clientWidth);
    };

    window.addEventListener("resize", getClientWidth);
    return () => window.removeEventListener("resize", getClientWidth);
  }, []);

  let currentDevice;
  if (clientWidth >= Breakpoint.XX) currentDevice = Device.XX;
  else if (clientWidth < Breakpoint.XX && clientWidth >= Breakpoint.XL)
    currentDevice = Device.XL;
  else if (clientWidth < Breakpoint.XL && clientWidth >= Breakpoint.LG)
    currentDevice = Device.LG;
  else if (clientWidth < Breakpoint.LG && clientWidth >= Breakpoint.MD)
    currentDevice = Device.MD;
  else if (clientWidth < Breakpoint.MD && clientWidth >= Breakpoint.SM)
    currentDevice = Device.SM;
  else currentDevice = Device.XS;

  return currentDevice;
};

export { useDevice };
