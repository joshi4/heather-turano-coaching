import React, { FC } from "react";
import { IconName } from "@fortawesome/pro-light-svg-icons";

import { Primitive, DOM } from "@heather-turano-coaching/design-system";

import { Icon, Copy } from "../typography";

import "./ButtonAction.module.scss";

export type ButtonActionProps = DOM.Button & {
  label: string;
  size?: Primitive.Size;
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
