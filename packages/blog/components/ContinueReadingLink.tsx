import React, { FC } from "react";
import Link, { LinkProps } from "next/link";
import { Button } from "@heather-turano-coaching/components";
// import { Copy, Icon, Button } from "@heather-turano-coaching/components";
import {
  makeOutset,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import styled from "styled-components";

const StyledContinueReadingLink = styled.div`
  ${makeOutset({ vertical: 16 })};
  a {
    display: inline-block;
    text-decoration-color: ${makeColor({ scalable: { color: "accent" } })};
  }
`;

export const ContinueReadingLink: FC<LinkProps> = props => (
  <StyledContinueReadingLink>
    <Link {...props}>
      <a>
        <Button styleType="primary" label="Keep reading" />
        {/* <Copy
          type="label"
          fontSize="sm"
          fontColor={{ scalable: { color: "accent" } }}
        >
          Keep reading
        </Copy>
        <Icon
          iconSize="sm"
          iconColor={{ scalable: { color: "accent" } }}
          iconWeight="fas"
          icon="long-arrow-alt-right"
        /> */}
      </a>
    </Link>
  </StyledContinueReadingLink>
);
