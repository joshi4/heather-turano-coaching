import React, { FC } from "react";
import styled from "styled-components";
import {
  makeInset,
  makeColor,
  makeRhythm
} from "@heather-turano-coaching/design-system/utils";
import { Heading, Copy, makeFlex } from "@heather-turano-coaching/components";
import { StyledFeaturedBlogCardContainer } from "./BlogCardFeature";
import { useBreakpoints } from "@heather-turano-coaching/hooks";

export interface BlogCardWelcomeProps {
  title: string;
  subTitle: string;
  description: string;
  descriptionMobilePrompt: string;
  descriptionDesktopPrompt: string;
}

const StyledBlogCardWelcome = styled.div`
  background: ${makeColor({ fixed: "light" })};
  background-image: ${`linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 33%,
    ${makeColor({ scalable: { color: "accent", scale: 1 } })} 100%
  )`};
  text-align: center;
  min-height: 100%;
  ${makeFlex("column", "center", "center")};
  ${makeInset({ horizontal: 48 })};
  width: 100%;

  & > * {
    p {
      line-height: 1.1;
      ${makeRhythm({ fontSize: "sm", top: 0, bottom: 2 })};
    }
  }

  & > p {
    margin: 0 auto;
    max-width: 55ch;
  }
`;

export const BlogCardWelcome: FC<BlogCardWelcomeProps> = ({
  title,
  subTitle,
  description,
  descriptionMobilePrompt,
  descriptionDesktopPrompt
}) => {
  const [windowWidth, { laptop }] = useBreakpoints();

  return (
    <StyledFeaturedBlogCardContainer>
      <StyledBlogCardWelcome>
        <div>
          <Heading
            fontFamily="Covered by your Grace"
            fontColor={{ scalable: { color: "primary", scale: 0 } }}
          >
            {title}
            {/* <Icon
              icon="trademark"
              iconWeight="far"
              iconSize="xs"
              iconColor={{ scalable: { color: "primary", scale: 0 } }}
            /> */}
          </Heading>
          <Copy type="label" fontSize={windowWidth < laptop ? "md" : "lg"}>
            {subTitle}
          </Copy>
        </div>
        <Copy type="text">{description}</Copy>
        <br />
        <Copy type="caption">
          {windowWidth < laptop
            ? descriptionMobilePrompt
            : descriptionDesktopPrompt}
        </Copy>
      </StyledBlogCardWelcome>
    </StyledFeaturedBlogCardContainer>
  );
};
