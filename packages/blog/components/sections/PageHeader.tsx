import React, { FC } from "react";
import { Copy, Heading } from "@heather-turano-coaching/components";
import styled from "styled-components";
import {
  makeRhythm,
  makeFont,
  makeInset,
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import { ColorProperties } from "@heather-turano-coaching/design-system/types/composite";

interface PageHeaderProps {
  pageTitle: string;
  pageTopic: string;
  titleColor?: ColorProperties;
}

const StyledLayoutPageHeader = styled.header`
  & > div > p {
    ${makeRhythm({ fontSize: "sm", top: 3, bottom: 0 })};
    text-transform: uppercase;
    ${makeFont({
      fontSize: "h4",
      fontWeight: "bold"
    })}
  }

  h1,
  h2 {
    text-transform: capitalize;
    ${makeRhythm({ fontSize: "sm", top: 0, bottom: 1 })};
    ${makeInset({ bottom: 16 })};
    width: 100%;
    border-bottom: ${makeSize({ custom: 1 })} solid
      ${makeColor({ scalable: { color: "secondary", scale: 3 } })};
  }

  h4 {
    ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })}
  }
`;

export const PageHeader: FC<PageHeaderProps> = ({
  pageTopic,
  pageTitle,
  titleColor = { scalable: { color: "secondary" } }
}) => (
  <StyledLayoutPageHeader>
    <div>
      <Copy
        type="label"
        fontSize="xl"
        fontColor={{ scalable: { color: "gray" } }}
      >
        {pageTopic}
      </Copy>
    </div>
    <Heading fontSize="h1" fontColor={titleColor}>
      {pageTitle}
    </Heading>
    {/* <Heading fontSize="h4" fontColor={{ scalable: { color: "gray" } }}>
      {category}
    </Heading> */}
  </StyledLayoutPageHeader>
);
