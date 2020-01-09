export type BlogType = "featured" | "regular";

export interface BaseBlog {
  type: BlogType;
}

export interface BlogSocialOptions {
  facebook?: string;
  pinterest?: string;
  instagram?: string;
  twitter?: string;
}

export interface BlogAuthor {
  firstName: string;
  lastName: string;
  avatarImg: string;
}

export interface BlogMetaInformation {
  datePublished: string;
}
