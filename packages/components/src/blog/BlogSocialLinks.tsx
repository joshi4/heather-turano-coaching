import React, { FC } from "react";
import styled from "styled-components";
import { ColorProperties } from "@heather-turano-coaching/design-system/types/composite";

import { Icon } from "../typography";
import {
  makeColor,
  makeSize
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";

export interface SocialLinks {
  facebook?: string;
  pinterest?: string;
  instagram?: string;
  twitter?: string;
}

type BlogSocialLinksProps = {
  orientation?: "vertical" | "horizontal";
} & SocialLinks;

const StyledBlogSocial = styled.ul<
  Required<Pick<BlogSocialLinksProps, "orientation">>
>`
  ${({ orientation }) =>
    orientation === "horizontal" && makeFlex("row", "center", "center")}
`;

const StyledBlogSocialLink = styled.li<{
  linkColor: ColorProperties["scalable"];
}>`
  ${makeFlex("row", "center", "center")};
  height: ${makeSize({ custom: 40 })};
  width: ${makeSize({ custom: 40 })};
  background: ${({ linkColor }) => makeColor({ scalable: linkColor })};
  border: 0.5px solid ${makeColor({ fixed: "light" })};
`;

export const BlogSocialLinks: FC<BlogSocialLinksProps> = ({
  orientation = "vertical",
  facebook,
  pinterest,
  instagram,
  twitter
}) =>
  facebook || pinterest || instagram || twitter ? (
    <StyledBlogSocial orientation={orientation}>
      {facebook && (
        <StyledBlogSocialLink linkColor={{ color: "secondary" }}>
          <Icon
            icon="facebook"
            iconWeight="fab"
            iconSize="sm"
            iconColor={{ fixed: "light" }}
          />
        </StyledBlogSocialLink>
      )}
      {pinterest && (
        <StyledBlogSocialLink linkColor={{ color: "primary" }}>
          <Icon
            icon="pinterest"
            iconWeight="fab"
            iconSize="sm"
            iconColor={{ fixed: "light" }}
          />
        </StyledBlogSocialLink>
      )}
      {instagram && (
        <StyledBlogSocialLink linkColor={{ color: "accent" }}>
          <Icon
            icon="instagram"
            iconWeight="fab"
            iconSize="sm"
            iconColor={{ fixed: "light" }}
          />
        </StyledBlogSocialLink>
      )}
      {twitter && (
        <StyledBlogSocialLink linkColor={{ color: "gray" }}>
          <Icon
            icon="twitter"
            iconWeight="fab"
            iconSize="sm"
            iconColor={{ fixed: "light" }}
          />
        </StyledBlogSocialLink>
      )}
    </StyledBlogSocial>
  ) : null;
