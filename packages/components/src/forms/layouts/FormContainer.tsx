import React, { FC } from "react";
import { Layout } from "@heather-turano-coaching/design-system/types/primitive";
import styled from "styled-components";
import {
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";

interface FormContainerProps {
  layout?: Layout;
}

const StyledFormContainer = styled.div<FormContainerProps>`
  width: 100%;
  ${makeOutset({ vertical: 20, horizontal: "auto" })}

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: makeOutset({ vertical: 32, horizontal: "auto" })
  })}
`;

export const FormConatiner: FC<FormContainerProps> = ({
  layout = "stacked",
  children
}) => <StyledFormContainer layout={layout}>{children}</StyledFormContainer>;
