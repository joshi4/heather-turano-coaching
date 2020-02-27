import React, { FC } from "react";
import styled from "styled-components";

import {
  makeInset,
  makeOutset,
  makeReset,
  makeSize,
  makeColor,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";
import { FontProperties } from "@heather-turano-coaching/design-system/types/composite";
import { useBreakpoints } from "@heather-turano-coaching/hooks";
import { Copy } from "@heather-turano-coaching/components";

import { fontColor } from ".";

const StyledFooterNavSection = styled.div`
  flex: 1;
  /* ${makeInset({ bottom: 60 })}; */

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      width: 100%;
      
      &:not(:first-child){
        ${makeInset({ bottom: 40 })};
      }
    `
  })}

  & > p {
    ${makeOutset({ bottom: 24 })}
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const StyledFooterNavSectionBody = styled.ul`
  ${makeReset("list")};

  & > li {
    ${makeOutset({ bottom: 12 })}
  }
`;

const StyledFooterSectionTitle = styled.div`
  position: relative;
  text-transform: uppercase;
  ${makeOutset({ bottom: 16 })};
  ${makeInset({ bottom: 8 })};
  text-align: left;

  &:after {
    content: "";
    display: block;
    height: ${makeSize({ custom: 2 })};
    background: ${makeColor({ scalable: { color: "accent", scale: 0 } })};
    left: 0;
    bottom: 0;
    position: absolute;
    width: ${makeSize({ custom: 60 })};
  }

  p {
    font-weight: 800;
  }
`;

export const FooterNavSection: FC<{ title: string }> = ({
  title,
  children
}) => {
  const [window, { tabletPortrait }] = useBreakpoints();

  const fontSize: FontProperties["fontSize"] =
    window < tabletPortrait ? "xs" : "xs";

  return (
    <StyledFooterNavSection>
      <StyledFooterSectionTitle>
        <Copy type="label" fontSize={fontSize} fontColor={fontColor}>
          {title}
        </Copy>
      </StyledFooterSectionTitle>
      <StyledFooterNavSectionBody>{children}</StyledFooterNavSectionBody>
    </StyledFooterNavSection>
  );
};
