import React from "react";

import { BlogContainer } from "./BlogContainer";

const img1 = require("../../.storybook/assets/stock/aquatic-bloom-blooming.jpg");

export default {
  component: BlogContainer,
  title: "Blog|Container"
};

const SampleContent = () => (
  <div
    style={{
      background: "#fff",
      height: "300px",
      width: "100%"
    }}
  />
);

export const featured = () => (
  <BlogContainer type="featured" imgSrc={img1} imgAlt="aquatic-bloom-blooming">
    <SampleContent />
  </BlogContainer>
);

export const regular_default = () => (
  <BlogContainer type="regular" imgSrc={img1} imgAlt="aquatic-bloom-blooming">
    <SampleContent />
  </BlogContainer>
);

export const regular_right = () => (
  <BlogContainer
    type="regular"
    contentSide="right"
    imgSrc={img1}
    imgAlt="aquatic-bloom-blooming"
  >
    <SampleContent />
  </BlogContainer>
);

export const regular_left = () => (
  <BlogContainer
    type="regular"
    contentSide="left"
    imgSrc={img1}
    imgAlt="aquatic-bloom-blooming"
  >
    <SampleContent />
  </BlogContainer>
);
