import React, { FC } from "react";
import { Heading, Copy, VertialRhythm } from "../typography";
import { Avatar } from "../misc";
import styled, { css } from "styled-components";
import {
  makeInset,
  makeResponsive,
  makeColor,
  makeSize,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";
import { SocialLinks, BlogSocialLinks } from "./BlogSocialLinks";
import { useBreakpoints } from "../hooks";

export interface BlogUser {
  firstName: string;
  lastName: string;
  avatarImg: string;
}

interface BlogCardProps {
  type: "featured" | "regular";
  user: BlogUser;
  datePublished: string;
  title: string;
  excerpt: string;
  social?: SocialLinks;
}

const avatarSize: { [key in BlogCardProps["type"]]: number } = {
  featured: 120,
  regular: 60
};

const StyledBlogCard = styled.div<
  Required<Pick<BlogCardProps, "type">> & Pick<BlogCardProps, "social">
>`
  position: relative;
  background: ${makeColor({ fixed: "light" })};
  ${({ type, social }) => {
    if (type === "featured") {
      return css`
        ${makeInset({ vertical: 60, horizontal: 24 })};

        ${makeResponsive({
          beginAt: "tabletPortrait",
          style: makeInset({ vertical: 60, horizontal: social ? 80 : 60 })
        })}
      `;
    }
    return css`
      ${makeInset({ top: 28, bottom: social ? 60 : 28, horizontal: 28 })};
    `;
  }}
`;
const StyledBlogProfile = styled.div<Required<Pick<BlogCardProps, "type">>>`
  text-transform: uppercase;

  ${({ type }) => {
    if (type === "featured") {
      return css`
        & > .avatar {
          position: absolute;
          top: -${makeSize({ custom: avatarSize[type] / 2 + 20 })};
          margin-left: -${makeSize({ custom: avatarSize[type] / 2 })};
          left: 50%;
        }

        & > .alt {
          ${makeFlex("row", "center", "center")};
        }
      `;
    }
    return css`
      ${makeFlex("row", "flex-start", "center")};

      & > .avatar {
        ${makeOutset({ right: 12 })}
      }

      & > .alt {
        p {
          margin: 0;
        }
      }
    `;
  }}
`;

const StyledCopySection = styled.div<Required<Pick<BlogCardProps, "type">>>`
  & > ul {
    position: absolute;

    ${({ type }) => {
      if (type === "featured") {
        return css`
          bottom: 0;

          ${makeResponsive({
            beginAt: "tabletPortrait",
            style: `
              right: 0;
              bottom: 30%;
            `
          })}
        `;
      }
      return css`
        bottom: 0;
      `;
    }}
  }
`;

export const BlogCard: FC<BlogCardProps> = ({
  type,
  user: { firstName, lastName, avatarImg },
  datePublished,
  title,
  social,
  excerpt
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const BlogProfile = (
    <StyledBlogProfile type={type}>
      <Avatar
        image={avatarImg}
        alt={`${firstName}-${lastName}`}
        size={{ custom: avatarSize[type] }}
      />
      <div className="alt">
        <Copy
          type="caption"
          fontSize="xs"
          fontColor={{ scalable: { color: "secondary" } }}
        >{`${firstName} ${lastName}`}</Copy>
        {type === "featured" && (
          <Copy
            type="caption"
            fontSize="xs"
            fontColor={{ scalable: { color: "gray", scale: 1 } }}
          >
            &nbsp;|&nbsp;
          </Copy>
        )}
        <Copy
          type="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "gray", scale: 1 } }}
        >
          {datePublished}
        </Copy>
      </div>
    </StyledBlogProfile>
  );

  return (
    <StyledBlogCard type={type} social={social}>
      {type === "featured" && BlogProfile}
      <VertialRhythm>
        <Heading
          fontSize={type === "featured" ? "h2" : "h3"}
          fontColor={{ scalable: { color: "gray" } }}
        >
          {title}
        </Heading>
        {type === "regular" && BlogProfile}
        <StyledCopySection type={type}>
          <Copy type="paragraph">{excerpt}</Copy>
          <BlogSocialLinks
            {...social}
            orientation={
              type === "regular" || windowWidth < tabletPortrait
                ? "horizontal"
                : "vertical"
            }
          />
        </StyledCopySection>
      </VertialRhythm>
    </StyledBlogCard>
  );
};
