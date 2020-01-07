import React, { FC } from "react";
import styled, { css } from "styled-components";

import { makeFlex } from "../utils";
import { SizeProperties } from "@heather-turano-coaching/design-system/types/composite";
import { makeSize } from "@heather-turano-coaching/design-system/utils";

type CustomImageSizeValues = number | null;

interface ImageProps {
  src: string;
  alt: string;
  size?: SizeProperties;
  manualHeight?: CustomImageSizeValues;
  manualWidth?: CustomImageSizeValues;
}

const StyledImageContainer = styled.div<{
  size: SizeProperties;
  manualHeight: CustomImageSizeValues;
  manualWidth: CustomImageSizeValues;
}>`
  ${makeFlex("row", "center", "center")};

  & > img {
    ${({ manualHeight, manualWidth, size }) => {
      if (manualWidth) {
        return css`
          height: auto;
          width: ${makeSize({ custom: manualWidth })};
        `;
      }
      if (manualHeight) {
        return css`
          height: ${makeSize({ custom: manualHeight })};
          width: auto;
        `;
      }
      return css`
        height: ${makeSize(size)};
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
    size={size}
    manualHeight={manualHeight}
    manualWidth={manualWidth}
  >
    <img src={src} alt={alt} {...restProps} />
  </StyledImageContainer>
);
