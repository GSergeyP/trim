import { memo } from "react";
import { data } from "./logo.data";
import { attr } from "./logo.attr";
import Img from "@/shared/ui/img";

function Logo() {
  return <Img data={data} attr={attr} />;
}

export const Component = memo(Logo);
