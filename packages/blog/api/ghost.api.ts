import { PostObject, TagsObject, PostOrPage, Tag } from "@tryghost/content-api";
import fetch from "isomorphic-unfetch";
import { getCategoriesFromTags } from "../utils";

export const getAllPosts = async (): Promise<PostObject> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as PostObject;
  return json;
};

export const getPostById = async (
  postId: PostOrPage["id"]
): Promise<PostOrPage> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/${postId}/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as PostOrPage;
  return json;
};

export type GetPostByTagApiRequest = Tag["slug"];
export type GetPostByTagApiResponse = { posts: [PostOrPage] };

export const getPostByTagSlug = async (
  tagSlug: GetPostByTagApiRequest
): Promise<GetPostByTagApiResponse> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}&include=authors,tags&filter=tag:${tagSlug}`
  );
  const json = (await res.json()) as GetPostByTagApiResponse;
  return json;
};

export type GetPostsBySlugRequest = PostOrPage["slug"];
export type GetPostsBySlugResponse = { posts: [PostOrPage] };

export const getPostBySlug = async (
  postSlug: GetPostsBySlugRequest
): Promise<GetPostsBySlugResponse> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/slug/${postSlug}/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as GetPostsBySlugResponse;
  return json;
};

export type GetAllTagsApiResponse = TagsObject;

export const getAllTags = async (): Promise<GetAllTagsApiResponse> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/tags/?key=${process.env.GHOST_API_KEY}&limit=all`
  );
  const json = (await res.json()) as GetAllTagsApiResponse;
  return json;
};

export type GetAllCategoriesApiResponse = TagsObject["tags"];

export const getAllCategories = async (): Promise<GetAllCategoriesApiResponse> => {
  const tags = await getAllTags();
  const categories = getCategoriesFromTags(tags.tags);
  return categories;
};
