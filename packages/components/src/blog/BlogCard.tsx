import React, { FC } from "react";
import { Heading, Copy } from "../typography";
import { Avatar } from "../misc";
import styled from "styled-components";
import {
  makeInset,
  makeResponsive,
  makeColor,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";

const avatarSize = 120;

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
}

const StyledBlogCard = styled.div<Required<Pick<BlogCardProps, "type">>>`
  background: ${makeColor({ fixed: "light" })};
  ${makeInset({ vertical: 60, horizontal: 24 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeInset({ vertical: 60, horizontal: 60 })
  })}
`;
const StyledBlogProfile = styled.div`
  & > .avatar {
    position: absolute;
    top: -${makeSize({ custom: avatarSize / 2 + 20 })};
    margin-left: -${makeSize({ custom: avatarSize / 2 })};
    left: 50%;
  }

  & > .alt {
    ${makeFlex("row", "center", "center")};
    text-transform: uppercase;
  }
`;

export const BlogCard: FC<BlogCardProps> = ({
  type,
  user: { firstName, lastName, avatarImg },
  datePublished,
  title,
  excerpt
}) => (
  <StyledBlogCard type={type}>
    <StyledBlogProfile>
      <Avatar
        image={avatarImg}
        alt={`${firstName}-${lastName}`}
        size={{ custom: avatarSize }}
      />
      <div className="alt">
        <Copy
          type="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "secondary" } }}
        >{`${firstName} ${lastName}`}</Copy>
        <Copy
          type="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "gray", scale: 2 } }}
        >
          &nbsp;|&nbsp;
        </Copy>
        <Copy
          type="label"
          fontSize="xs"
          fontColor={{ scalable: { color: "gray", scale: 2 } }}
        >
          {datePublished}
        </Copy>
      </div>
    </StyledBlogProfile>
    <Heading fontSize="h2" fontColor={{ scalable: { color: "gray" } }}>
      {title}
    </Heading>
    <Copy type="paragraph">{excerpt}</Copy>
  </StyledBlogCard>
);
