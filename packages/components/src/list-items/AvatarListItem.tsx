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

type AvatarListItemProps = Omit<AvatarProps, "size"> & {
  accentColor?: Extract<ColorScalable, "primary" | "secondary" | "accent">;
  name: string;
  bio?: string;
};

const StyledAvatarListItem = styled.div<
  Required<Pick<AvatarListItemProps, "accentColor">>
>`
  position: relative;
  box-sizing: border-box;
  ${makeInset({ horizontal: 16, vertical: 16 })};
  ${makeFlex("row", "center", "center")};
  display: inline-flex;
  background: ${makeColor({ fixed: "light" })};
  ${makeOutset({ bottom: 8 })};

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
      <Copy type="label" fontSize="md">
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
