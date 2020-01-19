import React, { FC } from "react";
import { Tag as TagType } from "@tryghost/content-api";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { filterOutCategoriesFromTags } from "../../utils";
import { Tag, TagGroup } from "@heather-turano-coaching/components";
import Link from "next/link";

interface BlockTagsListProps {
  tags: TagType[];
  title?: string;
}

export const BlockTagsList: FC<BlockTagsListProps> = ({
  tags,
  title = "all tags"
}) => (
  <LayoutBlock>
    <LayoutBlockTitle title={title} />
    <LayoutBlockContent>
      <TagGroup>
        {filterOutCategoriesFromTags(tags).map(tag => (
          <Link key={tag.id} href={`/tags/${tag.slug}`}>
            <a>
              <Tag tagType="tag" text={tag.name as string} />
            </a>
          </Link>
        ))}
      </TagGroup>
    </LayoutBlockContent>
  </LayoutBlock>
);
