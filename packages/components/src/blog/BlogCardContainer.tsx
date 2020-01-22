import React, { FC } from "react";
import styled, { SimpleInterpolation, css } from "styled-components";

import {
  makeSize,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";

import { makeFlex } from "../utils";
import { universalShadow } from "../shared";
import { BaseBlog, BlogType } from "./blog.types";

type BlogCardContainerProps = { blogType: BlogType };

const CSSBlogCardContainerMap: {
  [key in BaseBlog["blogType"]]: SimpleInterpolation;
} = {
  featured: css`
    border-radius: ${makeSize({ custom: 8 })};
    overflow: hidden;
    box-shadow: ${universalShadow};
    margin: 0 auto;
    ${makeOutset({
      horizontal: 8,
      vertical: 8
    })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
    position: relative;
    ${makeFlex("row", "flex-start", "stretch")};
    max-height: ${makeSize({ custom: 580 })};
    height: ${makeSize({ custom: 580 })};
  `
    })};
  `,
  regular: css``
};

const StyledBlogCardContainer = styled.div<BlogCardContainerProps>`
  ${({ blogType }) => CSSBlogCardContainerMap[blogType]};
`;

export const BlogCardContainer: FC<BlogCardContainerProps> = ({
  blogType,
  children
}) => (
  <StyledBlogCardContainer blogType={blogType}>
    {children}
  </StyledBlogCardContainer>
);
