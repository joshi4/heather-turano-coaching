import React, { FC } from "react";
import styled from "styled-components";
import {
  makeOutset,
  makeColor,
  makeFont,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import { Heading } from "@heather-turano-coaching/components";

interface LayoutBlockTitleProps {
  title: string;
}

const StyledLayoutBlockTitle = styled.header`
  width: 100%;
  ${makeOutset({ bottom: 16 })};
  border-bottom: ${makeSize({ custom: 1 })} solid
    ${makeColor({
      scalable: { color: "gray", scale: 3 }
    })};

  h5 {
    text-transform: uppercase;
    ${makeFont({
      fontSize: "xs",
      fontWeight: "bold",
      lineHeight: "md",
      fontColor: { fixed: "dark" }
    })}
  }
`;

export const LayoutBlockTitle: FC<LayoutBlockTitleProps> = ({ title }) => (
  <StyledLayoutBlockTitle>
    <Heading fontSize="h5" fontColor={{ fixed: "dark" }}>
      {title}
    </Heading>
  </StyledLayoutBlockTitle>
);
