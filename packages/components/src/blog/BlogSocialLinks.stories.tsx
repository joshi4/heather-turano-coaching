import React from "react";

import { BlogSocialLinks } from "./BlogSocialLinks";

export default {
  component: BlogSocialLinks,
  title: "Blog|Social Links"
};

const testLink = "go-to-this-social-media-platform";

export const allLinksWithDefaultOrientation = () => (
  <BlogSocialLinks
    facebook={testLink}
    pinterest={testLink}
    twitter={testLink}
    instagram={testLink}
  />
);
export const allLinksWithVerticalOrientation = () => (
  <BlogSocialLinks
    orientation="vertical"
    facebook={testLink}
    pinterest={testLink}
    twitter={testLink}
    instagram={testLink}
  />
);
export const allLinksWithHorizontalOrientation = () => (
  <BlogSocialLinks
    orientation="horizontal"
    facebook={testLink}
    pinterest={testLink}
    twitter={testLink}
    instagram={testLink}
  />
);
export const justFacebook = () => <BlogSocialLinks facebook={testLink} />;
export const justFacebookAndInstagram = () => (
  <BlogSocialLinks facebook={testLink} instagram={testLink} />
);
export const justFacebookAndTwitter = () => (
  <BlogSocialLinks facebook={testLink} twitter={testLink} />
);
export const noLinks = () => <BlogSocialLinks />;

export const allLinksWithGrayscaleStyle = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    facebook={testLink}
    pinterest={testLink}
    twitter={testLink}
    instagram={testLink}
  />
);
export const justFacebookWithGrayscale = () => (
  <BlogSocialLinks linkStyle="grayscale" facebook={testLink} />
);
export const justFacebookAndInstagramWithGrayscale = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    facebook={testLink}
    instagram={testLink}
  />
);
export const justFacebookAndTwitterWithGrayscale = () => (
  <BlogSocialLinks
    linkStyle="grayscale"
    facebook={testLink}
    twitter={testLink}
  />
);
