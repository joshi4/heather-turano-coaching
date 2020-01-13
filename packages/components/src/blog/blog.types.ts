export type BlogType = "featured" | "regular";

export interface BaseBlog {
  type: BlogType;
}

export interface BlogSocialOptions {
  social: {
    facebook?: string;
    pinterest?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface BlogAuthor {
  author: {
    avatarImg: string;
    name: string;
  };
}

export interface BlogMetaInformation {
  meta: {
    datePublished: string;
  };
}
