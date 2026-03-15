const Device = {
  XX: "xx",
  XL: "xl",
  LG: "lg",
  MD: "md",
  SM: "sm",
  XS: "xs",
} as const;

const Breakpoint = {
  XX: 1920,
  XL: 1600,
  LG: 1280,
  MD: 960,
  SM: 640,
  XS: 320,
} as const;

export { Device, Breakpoint };
