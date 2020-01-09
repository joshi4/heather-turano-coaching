import { BlogAuthor, BlogMetaInformation } from "../src/blog/blog.types";

export const blogAuthor: BlogAuthor["author"] = {
  firstName: "heather",
  lastName: "turano",
  avatarImg: require("./assets/htc-avatar.jpg")
};

export const blogMeta: BlogMetaInformation["meta"] = {
  datePublished: "June 25th, 2019"
};
