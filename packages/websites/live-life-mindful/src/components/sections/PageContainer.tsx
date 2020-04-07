import styled from "styled-components";

import {
  makeSize,
  makeSpace,
  makeInset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";
import { sharedHorizontalBodyPadding } from "@heather-turano-coaching/components";

const mandala = require("../../../static/images/mandala.png").default;

const StyledPageContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  /* ${makeInset({
    horizontal: sharedHorizontalBodyPadding.phone,
    bottom: 60
  })}; */
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 8%);
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 21%);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    background-image: url(${mandala});
    background-repeat: no-repeat;
    background-size: 100%;
    height: ${makeSize({ custom: 2400 })};
    width: 100vw;
    z-index: 0;
    left: ${makeSpace({ custom: 408 })};
    top: ${makeSpace({ custom: 300 })};
    pointer-events: none;
  }

  /* ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeInset({
        horizontal: sharedHorizontalBodyPadding.phone,
        bottom: 60
      })};
    `
  })} */
`;

export const PageContainer = StyledPageContainer;
