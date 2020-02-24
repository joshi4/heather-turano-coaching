import React, { FC } from "react";
import { Copy, Icon } from "../typography";
import styled, { css, SimpleInterpolation } from "styled-components";
import {
  makeInset,
  makeColor,
  makeSize,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import { makeFlex } from "../utils";
import { IconName } from "@fortawesome/pro-light-svg-icons";

interface FormNotificationProps {
  type: "success" | "error" | "warning";
}

const formNotificationStyleMap: {
  [key in FormNotificationProps["type"]]: SimpleInterpolation;
} = {
  success: css`
    background: ${makeColor({ scalable: { color: "success" } })};
  `,
  warning: css`
    background: ${makeColor({ scalable: { color: "warning", scale: 2 } })};
  `,
  error: css`
    background: ${makeColor({ scalable: { color: "error" } })};
  `
};

const StyledFormNotification = styled.div<FormNotificationProps>`
  box-sizing: border-box;
  ${makeInset({ horizontal: 20, vertical: 20 })};
  ${makeOutset({ horizontal: 20, vertical: 20 })};
  border-radius: ${makeSize({ custom: 4 })};
  ${makeFlex("row", "flex-start", "center")};

  & > * {
    &:first-child {
      ${makeOutset({ right: 20 })};
    }
  }

  ${({ type }) => formNotificationStyleMap[type]}
`;

export const FormNotification: FC<FormNotificationProps> = ({
  type,
  children
}) => {
  let stateIcon;
  if (type === "error") stateIcon = "thumbs-down";
  if (type === "warning") stateIcon = "meh";
  if (type === "success") stateIcon = "laugh-wink";

  return (
    <StyledFormNotification type={type}>
      <Icon
        icon={stateIcon as IconName}
        iconSize="xl"
        iconWeight="fas"
        iconColor={{ fixed: type !== "warning" ? "light" : "dark" }}
      />
      <Copy
        type="text"
        fontColor={{ fixed: type !== "warning" ? "light" : "dark" }}
      >
        {children}
      </Copy>
    </StyledFormNotification>
  );
};
