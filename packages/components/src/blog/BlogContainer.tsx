import React, { FC } from "react";

import { Section } from "../layouts";
import styled, { SimpleInterpolation, css } from "styled-components";
import {
  makeResponsive,
  makeSize,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
// import { spaceFromSides } from "../shared";
import { Image } from "../assets";
import { useBreakpoints } from "../hooks";

type BlogContainerType = "featured" | "regular";
type BlogContentSides = "left" | "right";

interface BlogContainerProps {
  type?: BlogContainerType;
  contentSide?: BlogContentSides;
  imgSrc: string;
  imgAlt: string;
}

const CSSBlogContainerTypeMap: {
  [key in BlogContainerType]: SimpleInterpolation;
} = {
  featured: css`
    & > div {
      position: absolute;
      top: 0;
      height: ${makeSize({ custom: 300 })};
      overflow-y: hidden;

      img {
        object-position: top;
      }

      ${makeResponsive({
        beginAt: "tabletLandscape",
        style: `
          left: ${makeSize({ custom: 48 })};
          right: ${makeSize({ custom: 48 })};

      `
      })}
      ${makeResponsive({
        beginAt: "desktop",
        style: `
          left: ${makeSize({ custom: 80 })};
          right: ${makeSize({ custom: 80 })};
      `
      })};

      ${makeResponsive({
        beginAt: "4K",
        style: `
          left: ${makeSize({ custom: 120 })};
          right: ${makeSize({ custom: 120 })};
      `
      })}
    }
  `,
  regular: css``
};

const StyledBlogContainer = styled.section<
  Required<Pick<BlogContainerProps, "type">>
>`
  ${({ type }) => CSSBlogContainerTypeMap[type]};
`;

const StyledBlogContent = styled.div<
  Required<Pick<BlogContainerProps, "contentSide">>
>`
  & > .image {
    width: 100%;
    overflow: hidden;

    ${makeResponsive({
      endAt: "tabletPortrait",
      style: `
        max-height: ${makeSize({ custom: 220 })};
      `
    })}

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        height: 100%;
        width: 70%;
        position: absolute;
        top: 0;
        bottom: 0;
        overflow: hidden;
        z-index: -1;
      `
    })}

    ${({ contentSide }) =>
      makeResponsive({
        beginAt: "tabletPortrait",
        style: contentSide === "left" ? "right: 0" : "left: 0"
      })}
  }

  & > .content {
    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        width: 60%;
        ${makeInset({ vertical: 68 })};
      `
    })}
    ${({ contentSide }) =>
      contentSide === "right" &&
      css`
        ${makeResponsive({
          beginAt: "tabletPortrait",
          style: "margin: 0 0 0 auto"
        })}
      `};
  }
`;

export const BlogContainer: FC<BlogContainerProps> = ({
  type = "regular",
  contentSide = "left",
  imgSrc,
  imgAlt,
  children
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  const blogContentImageSize = {
    manualHeight: "100%",
    manualWidth: "100%"
  };

  windowWidth < tabletPortrait
    ? delete blogContentImageSize.manualHeight
    : delete blogContentImageSize.manualWidth;

  return (
    <StyledBlogContainer type={type}>
      {type === "featured" && (
        <Image src={imgSrc} alt={imgAlt} manualWidth="100%" />
      )}
      <Section styleType={type === "featured" ? "featured-blog" : "blog"}>
        {type === "regular" && (
          <StyledBlogContent contentSide={contentSide}>
            <Image src={imgSrc} alt={imgAlt} {...blogContentImageSize} />
            {windowWidth < tabletPortrait ? (
              children
            ) : (
              <div className="content">{children}</div>
            )}
          </StyledBlogContent>
        )}
        {type === "featured" && children}
      </Section>
    </StyledBlogContainer>
  );
};
