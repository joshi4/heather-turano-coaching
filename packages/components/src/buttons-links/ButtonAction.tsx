import React, { FC } from "react";
import { IconName } from "@fortawesome/pro-light-svg-icons";
import {
  HTMLButton,
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";

import { Icon, Copy, IconProps } from "../typography";

import styled from "styled-components";
import {
  makeReset,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";

type ButtonActionProps = HTMLButton & {
  label?: string;
  buttonSize?: FontProperties["fontSize"];
  icon?: IconName | undefined;
  buttonColor?: ColorProperties;
  hoverColor?: ColorProperties;
  iconWeight?: IconProps["iconWeight"];
};

const StyledButtonAction = styled.button`
  ${makeReset("button")};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* & > p {
    ${makeOutset({ right: 4 })}
  } */

  div + p {
    ${makeOutset({ right: 4 })}
  }
`;

export const ButtonAction: FC<ButtonActionProps> = ({
  label,
  buttonSize = "sm",
  icon = undefined,
  iconWeight = "fas",
  buttonColor = { scalable: { color: "accent" } },
  ...restButtonProps
}) => (
  <StyledButtonAction {...restButtonProps}>
    {icon && (
      <Icon
        icon={icon}
        iconWeight={iconWeight}
        iconSize={buttonSize}
        iconColor={buttonColor}
      />
    )}
    {label && (
      <Copy type="label" fontSize={buttonSize} fontColor={buttonColor}>
        {label}
      </Copy>
    )}
  </StyledButtonAction>
);
