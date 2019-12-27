import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  ColorProperties,
  SizeProperties
} from "@heather-turano-coaching/design-system/types/composite";

import { StyledIcon } from "./_typography.styles";

library.add(fal, fab);

export type IconProps = {
  icon: IconName;
  iconWeight?: "fab" | "fal" | undefined;
  iconSize?: SizeProperties;
  iconColor?: ColorProperties;
  spin?: boolean;
};

export const Icon: FC<IconProps> = ({
  icon,
  iconWeight = "fal",
  iconSize = { size: "sm" },
  iconColor = { type: "scalable", color: "grayscale", scale: 2 },
  spin = false
}) => (
  <StyledIcon iconSize={iconSize} iconColor={iconColor}>
    <FontAwesomeIcon icon={[iconWeight, icon]} spin={spin} />
  </StyledIcon>
);
