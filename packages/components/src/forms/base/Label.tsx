import { makeOutset } from "@heather-turano-coaching/design-system";
import React, { FC } from "react";
import styled from "styled-components";

import { HTMLLabel } from "../../types";
import { Typography } from "../../typography";

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
  isValid = true,
}) => (
  <>
    {label && (
      <StyledLabel htmlFor={htmlFor}>
        <Typography
          variant="label"
          fontSize="sm"
          fontColor={{
            scalable: {
              color: isValid ? "secondary" : "error",
            },
          }}
        >
          {label}
        </Typography>
      </StyledLabel>
    )}
  </>
);
