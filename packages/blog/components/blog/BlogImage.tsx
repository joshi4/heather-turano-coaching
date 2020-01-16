import { BlogType } from "@heather-turano-coaching/components/dist/blog/blog.types";
import styled, { SimpleInterpolation, css } from "styled-components";
import { makeSize } from "@heather-turano-coaching/design-system/utils";

const CSSBlogImageMap: { [key in BlogType]: SimpleInterpolation } = {
  featured: css`
    min-width: ${makeSize({ custom: 660 })};
    width: ${makeSize({ custom: 660 })};
    max-width: ${makeSize({ custom: 660 })};
  `,
  regular: css`
    min-width: ${makeSize({ custom: 264 })};
    width: ${makeSize({ custom: 264 })};
    max-width: ${makeSize({ custom: 264 })};
  `
};

const StyledBlogImage = styled.div<{ blogType: BlogType }>`
  ${({ blogType }) => CSSBlogImageMap[blogType]};
  align-self: stretch;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BlogImage = StyledBlogImage;
