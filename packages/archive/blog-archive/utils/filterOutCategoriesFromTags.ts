import { Tag } from "@tryghost/content-api";
import { categoryDelimiter } from "./getCategoriesFromTags";

export const filterOutCategoriesFromTags = (tags: Tag[]): Tag[] =>
  tags.filter(({ name }) => !name?.includes(categoryDelimiter));
