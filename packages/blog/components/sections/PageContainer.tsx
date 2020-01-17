import styled from "styled-components";

import {
  makeSize,
  makeSpace,
  makeInset
} from "@heather-turano-coaching/design-system/utils";

const mandala = require("../../public/assets/mandala2.png").default;

const StyledPageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 8%);
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 21%);
  overflow: hidden;
  ${makeInset({ bottom: 60 })};
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
`;

export const PageContainer = StyledPageContainer;
