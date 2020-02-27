import React, { FC } from "react";
import styled from "styled-components";

import { makeReset } from "@heather-turano-coaching/design-system/utils";
import { Copy } from "@heather-turano-coaching/components";

import { NavLinkType } from "../layout";
import { FrameworkLink } from "../general";
import { fontColor } from "./FooterNav";

const StyledFooterNavLinkList = styled.ul`
  ${makeReset("list")};

  a {
    ${makeReset("anchor")}
  }
`;

export const FooterNavLinkList: FC<{ list: NavLinkType[] }> = ({ list }) => (
  <StyledFooterNavLinkList>
    {list.map(item => (
      <li key={item.route}>
        <FrameworkLink to={item.route}>
          <Copy fontSize="xs" fontColor={fontColor}>
            {item.label}
          </Copy>
        </FrameworkLink>
      </li>
    ))}
  </StyledFooterNavLinkList>
);
