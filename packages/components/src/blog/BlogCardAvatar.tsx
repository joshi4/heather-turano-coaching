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
import { ColorProperties } from "@heather-turano-coaching/design-system/types/composite";

type BlogCardAvatarProps = BlogAuthor &
  BlogMetaInformation & {
    layoutType: "inline" | "stacked";
    themeType?: "light" | "dark";
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
  datePublished,
  themeType = "dark"
}) => {
  const copyColor: ColorProperties =
    themeType === "dark"
      ? { scalable: { color: "gray", scale: 1 } }
      : { scalable: { color: "gray", scale: 3 } };

  return (
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
          fontColor={
            themeType === "dark"
              ? { scalable: { color: "secondary" } }
              : { fixed: "dark" }
          }
        >
          {authorName}
        </Copy>
        {layoutType === "stacked" && (
          <Copy type="caption" fontSize="xs" fontColor={copyColor}>
            &nbsp;|&nbsp;
          </Copy>
        )}
        <Copy type="label" fontSize="xs" fontColor={copyColor}>
          {datePublished}
        </Copy>
      </div>
    </StyledBlogCardAvatar>
  );
};
