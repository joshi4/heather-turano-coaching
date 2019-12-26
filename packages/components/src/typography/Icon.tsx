import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import {
  Size,
  Color
} from "@heather-turano-coaching/design-system/types/primitive";

import { HeadingSize } from "./_typography.types";
import "./Icon.module.scss";

library.add(fal, fab);

export type IconProps = {
  icon: IconName;
  iconWeight?: "fab" | "fal" | undefined;
  size?: Size | HeadingSize;
  position?: Position;
  color?: Color;
  spin?: boolean;
};

export const Icon: FC<IconProps> = ({
  icon,
  iconWeight = "fal",
  size = "sm",
  position = "center",
  color = "grayscale",
  spin = false
}) => (
  <div className={`icon ${color}`} styleName={`icon ${size} ${position}`}>
    <FontAwesomeIcon fixedWidth icon={[iconWeight, icon]} spin={spin} />
  </div>
);
