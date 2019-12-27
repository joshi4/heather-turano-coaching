import React, { FC } from "react";
import { IconName } from "@fortawesome/pro-light-svg-icons";
import {
  HTML__Button,
  SizeProperties
} from "@heather-turano-coaching/design-system/types/composite";

import { Icon, Copy } from "../typography";

import "./ButtonAction.module.scss";

export type ButtonActionProps = HTML__Button & {
  label: string;
  size?: SizeProperties;
  icon?: IconName | undefined;
  iconWeight?: "fal" | "fab" | undefined;
};

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  size = { size: "sm" },
  icon = undefined,
  iconWeight = undefined,
  ...restButtonProps
}) => (
  <button styleName="link" type="button" {...restButtonProps}>
    {icon && <Icon icon={icon} iconWeight={iconWeight} iconSize={size} />}
    <Copy type="caption" fontSize={size}>
      {label}
    </Copy>
  </button>
);
