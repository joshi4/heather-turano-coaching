import React, { FC } from "react";
import { BlogMetaInformation, BlogAuthor } from "./blog.types";
import styled, { css } from "styled-components";
import {
  makeSize,
  makeOutset,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";
import { Copy } from "../typography";
import { Avatar } from "../assets";

type BlogCardAvatarProps = BlogAuthor &
  BlogMetaInformation & {
    layoutType: "inline" | "stacked";
  };

const avatarSize: { [key in BlogCardAvatarProps["layoutType"]]: number } = {
  stacked: 144,
  inline: 60
};

const StyledBlogCardAvatar = styled.div<
  Required<Pick<BlogCardAvatarProps, "layoutType">>
>`
  text-transform: uppercase;
  position: relative;

  ${({ layoutType }) => {
    if (layoutType === "stacked") {
      return css`
        ${makeInset({ top: avatarSize.stacked / 2 })};

        & > .avatar {
          position: absolute;
          top: -${makeSize({ custom: avatarSize[layoutType] / 2 + 20 })};
          margin-left: -${makeSize({ custom: avatarSize[layoutType] / 2 })};
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

export const BlogCardAvatar: FC<BlogCardAvatarProps> = ({
  layoutType,
  avatarImg,
  authorName,
  datePublished
}) => (
  <StyledBlogCardAvatar layoutType={layoutType}>
    <Avatar
      image={avatarImg}
      alt={authorName}
      size={{ custom: avatarSize[layoutType] }}
    />
    <div className="alt">
      <Copy
        type="caption"
        fontSize="xs"
        fontColor={{ scalable: { color: "secondary" } }}
      >
        {authorName}
      </Copy>
      {layoutType === "stacked" && (
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
  </StyledBlogCardAvatar>
);
