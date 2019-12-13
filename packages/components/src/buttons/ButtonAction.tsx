import React, { FC } from "react";
import { IconName } from "@fortawesome/pro-light-svg-icons";

import { DOMType__Button } from "@heather-turano-coaching/typescript/types";
import { Primitive_Size } from "@heather-turano-coaching/styles/types";

import { Icon, Copy } from "../typography";

import "./ButtonAction.module.scss";

export type ButtonActionProps = DOMType__Button & {
  label: string;
  size?: Primitive_Size;
  icon?: IconName | undefined;
  iconWeight?: "fal" | "fab" | undefined;
};

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  size = "sm",
  icon = undefined,
  iconWeight = undefined,
  ...restButtonProps
}) => (
  <button styleName="link" type="button" {...restButtonProps}>
    {icon && <Icon icon={icon} iconWeight={iconWeight} size={size} />}
    <Copy type="caption" size={size}>
      {label}
    </Copy>
  </button>
);
