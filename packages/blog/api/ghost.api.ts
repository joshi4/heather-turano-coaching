import { PostObject, TagsObject, PostOrPage } from "@tryghost/content-api";
import fetch from "isomorphic-unfetch";

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

export const getPostBySlug = async (
  postSlug: PostOrPage["slug"]
): Promise<{ posts: [PostOrPage] }> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/slug/${postSlug}/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as { posts: [PostOrPage] };
  return json;
};

export const getAllTags = async (): Promise<TagsObject> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/tags/?key=${process.env.GHOST_API_KEY}&limit=all`
  );
  const json = (await res.json()) as TagsObject;
  console.log(json.tags.length);
  return json;
};
