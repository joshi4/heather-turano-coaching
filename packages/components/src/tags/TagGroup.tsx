import React, { FC } from "react";

import { Tag, TagProps } from "./Tag";

import "./TagGroup.module.scss";

export interface TagGroup {
  tags?: TagProps[];
}

export const TagGroup: FC<TagGroup> = ({ tags = [] }) =>
  tags && tags.length ? (
    <ul styleName="tag-group">
      {tags.map(({ value }) => (
        <li key={value}>
          <Tag value={value} />
        </li>
      ))}
    </ul>
  ) : null;
