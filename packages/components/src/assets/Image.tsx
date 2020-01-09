import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeFlex } from "../utils";
import { SizeProperties } from "@heather-turano-coaching/design-system/types/composite";
import { makeSize } from "@heather-turano-coaching/design-system/utils";

type CustomImageSizeValues = number | null;

interface ImageProps {
  src: string;
  alt: string;
  size?: SizeProperties | string;
  manualHeight?: CustomImageSizeValues | string;
  manualWidth?: CustomImageSizeValues | string;
}

const StyledImageContainer = styled.div<
  Pick<ImageProps, "manualHeight" | "manualWidth"> &
    Required<Pick<ImageProps, "size">>
>`
  ${makeFlex("row", "center", "center")};

  & > img {
    ${({ manualHeight, manualWidth, size }) => {
      if (manualWidth) {
        return css`
          height: auto;
          width: ${typeof manualWidth === "string"
            ? manualWidth
            : makeSize({ custom: manualWidth })};
        `;
      }
      if (manualHeight) {
        return css`
          height: ${typeof manualHeight === "string"
            ? manualHeight
            : makeSize({ custom: manualHeight })};
          width: auto;
        `;
      }
      return css`
        height: ${typeof size === "string" ? size : makeSize(size)};
        width: auto;
      `;
    }}
  }
`;

export const Image: FC<ImageProps> = ({
  src,
  alt,
  size = "sm",
  manualHeight = null,
  manualWidth = null,
  ...restProps
}) => (
  <StyledImageContainer
    className="image"
    size={size}
    manualHeight={manualHeight}
    manualWidth={manualWidth}
  >
    <img src={src} alt={alt} {...restProps} />
  </StyledImageContainer>
);
