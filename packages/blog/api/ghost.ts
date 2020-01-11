import GhostContentAPI, { PostOrPage, PostObject } from "@tryghost/content-api";

// Create API instance with site credentials
const api = GhostContentAPI({
  url: "https://blog.livelifemindful.com",
  key: "fb325f3182dc0b7734cd7dd3dc",
  version: "v3"
});

export const getPosts = async (): Promise<PostObject> => {
  const posts = await api.posts.browse({
    limit: "all",
    include: ["authors", "tags"]
  });
  return {
    posts: (posts as unknown) as PostOrPage[],
    meta: posts.meta
  };
};
