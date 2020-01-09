import React from "react";

import { Blog } from "./Blog";
import {
  blogAuthor,
  blogMeta,
  blogTags,
  BlogContent
} from "../../.storybook/contants";

const heroImg = require("../../.storybook/assets/stock/backlit-beach-clouds.jpg");

export default {
  component: Blog,
  title: "Blog|Full Page Blog"
};

export const withHero = () => (
  <Blog
    author={blogAuthor}
    social={{
      facebook: "testing-with-facebook",
      pinterest: "testing-with-pinterest",
      twitter: "testing-with-twitter",
      instagram: "testing-with-instagram"
    }}
    meta={blogMeta}
    heroImg={heroImg}
    title="Walking out of the past and into your future like woah."
    tags={blogTags}
  >
    <BlogContent />
  </Blog>
);

export const withoutHero = () => (
  <Blog
    author={blogAuthor}
    social={{
      facebook: "testing-with-facebook",
      pinterest: "testing-with-pinterest",
      twitter: "testing-with-twitter",
      instagram: "testing-with-instagram"
    }}
    meta={blogMeta}
    title="Walking out of the past and into your future like woah."
    tags={blogTags}
  >
    <BlogContent />
  </Blog>
);
