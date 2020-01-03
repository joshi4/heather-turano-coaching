import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Heading, Copy } from "../typography";
import {
  makeResponsive,
  makeSpace
} from "@heather-turano-coaching/design-system/utils";

export interface HeroProps {
  image: string;
  alt: string;
  title: string;
  subTitle: string;
}

const StyledHero = styled.section`
  width: 100%;
  min-height: 350px;

  ${makeResponsive({
    beginAt: "desktop",
    style: css`
      height: ${makeSpace({ custom: 550 })};
    `
  })}

  ${makeResponsive({
    beginAt: "4K",
    style: css`
      height: ${makeSpace({ custom: 660 })};
    `
  })}

  & > div {
    &:first-child {
      height: 100%;
    }

    &.top,
    &.bottom {
      padding: 40px;
      left: 0;
      right: 0;
    }

    &.top {
      top: 0;
      bottom: 50%;

      & > div {
        max-width: 70%;
      }
    }

    &.bottom {
      top: 50%;
      bottom: 0;

      & > * {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
        height: 100%;
      }

      ${makeResponsive({
        beginAt: "desktop",
        style: css`
          display: block;
        `
      })}
    }
  }

  .block {
    &.sm {
      margin-top: 10px;
    }
    &.lg {
      margin-top: 20px;
    }
  }
`;

const StyledHeroImage = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  img {
    /* @include image__border; */
    height: 100%;
    margin: 0 auto;
    width: 100%;
    object-fit: cover;
    object-position: 100% 50%;
    float: right;
  }
`;

export const Hero: FC<HeroProps> = ({
  image,
  alt,
  title,
  subTitle,
  children
}) => (
  <StyledHero>
    <StyledHeroImage>
      <img src={image} alt={alt} />
    </StyledHeroImage>
    <div styleName="top">
      <div>
        <Heading
          fontSize="h2"
          copy={`'${title}'`}
          fontColor={{ scalable: { color: "light" } }}
        />
        <div styleName="block sm">
          <Copy
            type="paragraph"
            fontSize="xl"
            fontColor={{ scalable: { color: "light" } }}
          >
            {subTitle}
          </Copy>
        </div>
      </div>
      <div styleName="block lg">{children}</div>
    </div>
  </StyledHero>
);
