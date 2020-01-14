import { PostObject, TagsObject } from "@tryghost/content-api";
import fetch from "isomorphic-unfetch";

// Create API instance with site credentials
// const api = GhostContentAPI({
//   url: "https://blog.livelifemindful.com",
//   key: "fb325f3182dc0b7734cd7dd3dc",
//   version: "v3"
// });

export const getAllPosts = async (): Promise<PostObject> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/posts/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as PostObject;
  return json;
};

export const getAllTags = async (): Promise<TagsObject> => {
  const res = await fetch(
    `https://blog.livelifemindful.com/ghost/api/v3/content/tags/?key=${process.env.GHOST_API_KEY}&include=authors,tags`
  );
  const json = (await res.json()) as TagsObject;
  return json;
};
