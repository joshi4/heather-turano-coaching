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

type BlogAvatarProps = BlogAuthor &
  BlogMetaInformation & {
    type: "inline" | "stacked";
  };

const avatarSize: { [key in BlogAvatarProps["type"]]: number } = {
  stacked: 144,
  inline: 60
};

const StyledBlogAvatar = styled.div<Required<Pick<BlogAvatarProps, "type">>>`
  text-transform: uppercase;
  position: relative;

  ${({ type }) => {
    if (type === "stacked") {
      return css`
        ${makeInset({ top: avatarSize.stacked / 2 })};

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

export const BlogAvatar: FC<BlogAvatarProps> = ({
  type,
  author: { firstName, lastName, avatarImg },
  meta: { datePublished }
}) => (
  <StyledBlogAvatar type={type}>
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
      {type === "stacked" && (
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
  </StyledBlogAvatar>
);
