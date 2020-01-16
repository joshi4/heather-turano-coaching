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
  filter?: "all" | "categories";
  alignment?: TagGroupProps["alignment"];
}

const normalizeTagName = (
  filter: TagSectionProps["filter"],
  tagName: string
): string => {
  if (filter === "categories") {
    return tagName.split("-")[1];
  }
  return tagName;
};

export const TagsSection: FC<TagSectionProps> = ({
  tags = [],
  filter = "all",
  ...restProps
}) => (
  <>
    {tags.length > 0 && (
      <TagGroup {...restProps}>
        {tags
          .filter(tag => {
            if (filter === "categories") {
              return tag.name?.includes("category-");
            }
            return !tag.name?.includes("category-");
          })
          .map(tag => (
            <Link key={tag.id} href={`tags/${tag.slug}`}>
              <a>
                <Tag
                  key={tag.id}
                  text={normalizeTagName(filter, tag.name as string)}
                />
              </a>
            </Link>
          ))}
      </TagGroup>
    )}
  </>
);
