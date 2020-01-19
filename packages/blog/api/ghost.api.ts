import {
  PostObject,
  TagsObject,
  PostOrPage,
  Tag,
  Author,
  AuthorsObject
} from "@tryghost/content-api";
import fetch from "isomorphic-unfetch";
import { getCategoriesFromTags } from "../utils";

const contentApi = "https://blog.livelifemindful.com/ghost/api/v3/content/";
const ghostContentApiKey = process.env.GHOST_API_KEY;

export const getAllPosts = async (): Promise<PostObject> => {
  const res = await fetch(
    `${contentApi}posts/?key=${ghostContentApiKey}&include=authors,tags`
  );
  const json = (await res.json()) as PostObject;
  return json;
};

export const getPostById = async (
  postId: PostOrPage["id"]
): Promise<PostOrPage> => {
  const res = await fetch(
    `${contentApi}posts/${postId}/?key=${ghostContentApiKey}&include=authors,tags`
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
    `${contentApi}posts/?key=${ghostContentApiKey}&include=authors,tags&filter=tag:${tagSlug}`
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
    `${contentApi}posts/slug/${postSlug}/?key=${ghostContentApiKey}&include=authors,tags`
  );
  const json = (await res.json()) as GetPostsBySlugResponse;
  return json;
};

export type GetPostsByAuthorSlugApiRequest = PostOrPage["slug"];
export type GetPostsByAuthorSlugApiResponse = PostObject;

export const getPostsByAuthorSlug = async (
  authorSlug: GetPostsByAuthorSlugApiRequest
): Promise<GetPostsByAuthorSlugApiResponse> => {
  const res = await fetch(
    `${contentApi}posts/?key=${ghostContentApiKey}&filter=author:${authorSlug}&include=tags`
  );
  const json = (await res.json()) as GetPostsByAuthorSlugApiResponse;
  return json;
};

export type GetTagsAndCategoriesByAuthorSlugApiRequest = Tag["slug"];
export type GetTagsAndCategoriesByAuthorSlugApiResponse = {
  tags: Tag[];
  categories: Tag[];
};

export const getTagsAndCategoriesByAuthorSlug = async (
  authorSlug: GetTagsAndCategoriesByAuthorSlugApiRequest
): Promise<GetTagsAndCategoriesByAuthorSlugApiResponse> => {
  const res = await getAllPosts();

  const authorTags = res.posts.reduce<Tag[]>((accum, post) => {
    if (post.authors?.find(author => author.slug === authorSlug)) {
      return [...accum, ...post.tags];
    }
    return accum;
  }, []);

  return {
    tags: authorTags,
    categories: getCategoriesFromTags(authorTags)
  };
};

export type GetAllTagsApiResponse = TagsObject;

export const getAllTags = async (): Promise<GetAllTagsApiResponse> => {
  const res = await fetch(
    `${contentApi}tags/?key=${ghostContentApiKey}&limit=all`
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

export type GetAuthorBySlugApiRequest = Author["slug"];
export type GetAuthorBySlugApiResponse = { author: Author };

export const getAuthorBySlug = async (
  authorSlug: GetAuthorBySlugApiRequest
): Promise<GetAuthorBySlugApiResponse> => {
  const res = await fetch(
    `${contentApi}authors/slug/${authorSlug}/?key=${ghostContentApiKey}&include=count.posts`
  );
  const json = (await res.json()) as AuthorsObject;
  console.log(json);
  return {
    author: json.authors[0]
  };
};
