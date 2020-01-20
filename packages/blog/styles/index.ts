import { css } from "styled-components";
import { makeColor } from "@heather-turano-coaching/design-system/utils";

export const universalHover = css`
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 2px 12px 0 ${makeColor({ scalable: { color: "gray" } })};
  }
`;
