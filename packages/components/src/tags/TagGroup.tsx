import React, { FC } from "react";
import styled from "styled-components";
import {
  makeOutset,
  makeReset,
  makeSpace,
  makeInset
} from "@heather-turano-coaching/design-system/utils";

import { Tag, TagProps, StyledTag } from "./Tag";

export interface TagGroup {
  tags?: TagProps[];
}

const StyledTagGroup = styled.ul`
  ${makeReset("list")}
  ${makeOutset({ top: -16 })};
  ${makeInset({ vertical: 16 })};

  & > li,
  & > ${StyledTag} {
    display: inline-block;
    ${makeOutset({ top: 16 })};

    &:not(:last-child) {
      margin-right: ${makeSpace(16)};
    }
  }
`;

export const TagGroup: FC<TagGroup> = ({ tags = [], children }) => (
  <>
    {tags && tags.length !== 0 && (
      <StyledTagGroup>
        {tags.map((props, index) => (
          <li key={index.toString()}>
            <Tag {...props} />
          </li>
        ))}
      </StyledTagGroup>
    )}
    {children && <StyledTagGroup as="div">{children}</StyledTagGroup>}
  </>
);
