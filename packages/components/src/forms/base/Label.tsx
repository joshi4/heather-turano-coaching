import React, { FC } from "react";
import { HTMLLabel } from "@heather-turano-coaching/design-system/types/composite";

import { Copy } from "../../typography";
import styled from "styled-components";
import { makeOutset } from "@heather-turano-coaching/design-system/utils";

export type LabelProps = HTMLLabel & {
  label?: string;
  isValid?: boolean;
};

const StyledLabel = styled.label`
  display: inline-block;
  ${makeOutset({ bottom: 4 })}
`;

export const Label: FC<LabelProps> = ({
  label = undefined,
  htmlFor,
  isValid = true
}) => (
  <>
    {label && (
      <StyledLabel htmlFor={htmlFor} styleName="input-label">
        <Copy
          type="label"
          fontSize={{ size: "sm" }}
          fontColor={{
            scalable: {
              color: isValid ? "secondary" : "error"
            }
          }}
        >
          {label}
        </Copy>
      </StyledLabel>
    )}
  </>
);
