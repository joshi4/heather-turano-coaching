import React, { FC } from "react";
import { Tag as GhostTag } from "@tryghost/content-api";
import {
  Tag,
  TagGroup,
  TagGroupProps
} from "@heather-turano-coaching/components";
import Link from "next/link";

interface TagSectionProps {
  tags?: GhostTag[];
  alignment?: TagGroupProps["alignment"];
}
export const TagsSection: FC<TagSectionProps> = ({
  tags = [],
  ...restProps
}) => (
  <>
    {tags.length > 0 && (
      <TagGroup {...restProps}>
        {tags
          .filter(tag => !tag.name?.includes("category-"))
          .map(tag => (
            <Link key={tag.id} href={`tags/${tag.slug}`}>
              <a>
                <Tag key={tag.id} text={tag.name as string} />
              </a>
            </Link>
          ))}
      </TagGroup>
    )}
  </>
);
