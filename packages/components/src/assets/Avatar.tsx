import React, { FC } from "react";
import styled, { css } from "styled-components";

import {
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import {
  SizeProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";

export interface AvatarProps {
  image: string;
  alt: string;
  size?: SizeProperties;
}

const avatarSizeMap: {
  [key in FontProperties["fontSize"]]: FontProperties["fontSize"];
} = {
  h1: "h2",
  h2: "h3",
  h3: "h4",
  h4: "h5",
  h5: "xs",
  xxl: "xl",
  xl: "lg",
  lg: "md",
  md: "sm",
  sm: "xs",
  xs: "xxs",
  xxs: "xxs"
};

const StyledAvatar = styled.div.attrs({ className: "avatar" })<
  Required<Pick<AvatarProps, "size">>
>`
  ${({ size }) => css`
    height: ${makeSize(size)};
    width: ${makeSize(size)};
  `}
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    border-radius: 50%;
    border: ${makeSize({ custom: 2 })} solid ${makeColor({ fixed: "light" })};
    z-index: 10;
    animation: fadein 0.25s;
    border-radius: 50%;
    object-fit: cover;
    ${({ size }) => {
      if (typeof size === "string" && avatarSizeMap[size]) {
        return css`
          height: ${makeSize(avatarSizeMap[size])};
          width: ${makeSize(avatarSizeMap[size])};
        `;
      }
      return css`
        height: ${makeSize(size)};
        width: ${makeSize(size)};
        transform: scale(0.88);
      `;
    }}
  }
`;

export const Avatar: FC<AvatarProps> = ({ image, alt, size = "h1" }) => (
  <StyledAvatar size={size}>
    <img src={image} alt={alt} />
  </StyledAvatar>
);
