import React, { FC } from "react";
import { Tag as GhostTag } from "@tryghost/content-api";
import { Tag, TagGroup } from "@heather-turano-coaching/components";
import Link from "next/link";

interface TagSectionProps {
  tags?: GhostTag[];
}
export const TagsSection: FC<TagSectionProps> = ({ tags = [] }) => (
  <>
    {tags.length > 0 && (
      <TagGroup>
        {tags
          .filter(tag => !tag.name?.includes("category-"))
          .map(tag => (
            <Link href={`tags/${tag.slug}`}>
              <a>
                <Tag key={tag.id} text={tag.name as string} />
              </a>
            </Link>
          ))}
      </TagGroup>
    )}
  </>
);
