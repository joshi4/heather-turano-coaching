import React, { FC } from "react";
import { ColorScalable } from "@heather-turano-coaching/design-system/types/primitive/color.primitive";
import { AvatarProps, Avatar } from "../assets";
import styled from "styled-components";
import {
  makeInset,
  makeSize,
  makeColor,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";
import { Copy } from "../typography";

export type AvatarListItemColors = Extract<
  ColorScalable,
  "primary" | "secondary" | "accent"
>;

type AvatarListItemProps = Omit<AvatarProps, "size"> & {
  accentColor?: AvatarListItemColors;
  name: string;
  bio?: string | null;
};

const StyledAvatarListItem = styled.div<
  Required<Pick<AvatarListItemProps, "accentColor">>
>`
  position: relative;
  box-sizing: border-box;
  ${makeInset({ horizontal: 16, vertical: 8 })};
  ${makeFlex("row", "center", "center")};
  background: ${makeColor({ fixed: "light" })};
  width: 100%;

  & * {
    box-sizing: border-box;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${makeSize({ custom: 46 })};
    background: ${({ accentColor }) =>
      makeColor({ scalable: { color: accentColor, scale: 2 } })};
  }

  & > div {
    &:first-child {
      ${makeOutset({ right: 16 })};
    }
    &:last-child {
      flex: 1;
    }
  }
`;

export const AvatarListItem: FC<AvatarListItemProps> = ({
  accentColor = "primary",
  image,
  alt,
  name,
  bio
}) => (
  <StyledAvatarListItem accentColor={accentColor}>
    <div>
      <Avatar alt={alt} image={image} size={{ custom: 60 }} />
    </div>
    <div>
      <Copy type="label" fontSize="sm">
        {name}
      </Copy>
      {bio && (
        <Copy type="paragraph" fontSize="xs">
          {bio.length > 196 ? `${bio.substring(0, 196)} ...` : bio}
        </Copy>
      )}
    </div>
  </StyledAvatarListItem>
);
