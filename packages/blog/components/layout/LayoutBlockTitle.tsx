import React, { FC } from "react";
import styled from "styled-components";
import {
  makeColor,
  makeFont,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import { Heading, makeFlex } from "@heather-turano-coaching/components";

interface LayoutBlockTitleProps {
  title: string;
}

const StyledLayoutBlockTitle = styled.header`
  width: 100%;
  ${makeFlex("row", "space-between", "center")};
  border-bottom: ${makeSize({ custom: 1 })} solid
    ${makeColor({
      scalable: { color: "gray", scale: 3 }
    })};

  h5 {
    text-transform: uppercase;
    ${makeFont({
      fontSize: "sm",
      fontWeight: "bold",
      lineHeight: "lg",
      fontColor: { fixed: "dark" }
    })}
  }
`;

export const LayoutBlockTitle: FC<LayoutBlockTitleProps> = ({
  title,
  children
}) => (
  <StyledLayoutBlockTitle>
    <Heading fontSize="h5" fontColor={{ fixed: "dark" }}>
      {title}
    </Heading>
    {children}
  </StyledLayoutBlockTitle>
);
