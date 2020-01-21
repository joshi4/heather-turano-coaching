import React, { FC } from "react";
import { Tag as TagType } from "@tryghost/content-api";
import {
  Tag,
  TagGroup,
  ButtonAction
} from "@heather-turano-coaching/components";

import { NextLink } from "../general";
import { filterOutCategoriesFromTags } from "../../utils";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";

interface BlockTagsListProps {
  tags: TagType[];
  title?: string;
  limit?: number;
}

export const BlockTagsList: FC<BlockTagsListProps> = ({
  tags,
  title = "all tags",
  limit
}) => {
  const tagsWithoutCats = filterOutCategoriesFromTags(tags);
  const ts = limit
    ? tagsWithoutCats.filter((_tag, index) => index < limit)
    : tags;
  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title}>
        <NextLink href="/tags">
          <ButtonAction
            buttonSize="md"
            buttonColor={{ scalable: { color: "secondary", scale: 1 } }}
            icon="tags"
            iconWeight="fad"
            title="View all tags"
          />
        </NextLink>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <TagGroup>
          {ts.map(tag => (
            <NextLink key={tag.slug} href={`/tags/${tag.slug}`}>
              <Tag tagType="tag" text={tag.name as string} />
            </NextLink>
          ))}
        </TagGroup>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
