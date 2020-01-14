import React, { FC } from "react";

import { BlogCard } from "./BlogCard";
import { blogAuthor, blogMeta, blogSocial } from "../../.storybook/contants";

export default {
  component: BlogCard,
  title: "Blog|Card"
};

const Container: FC<{ width?: string }> = ({ children, width = "700px" }) => (
  <div style={{ backgroundColor: "#ccc" }}>
    <div style={{ maxWidth: width, margin: "0 auto", backgroundColor: "#ccc" }}>
      {children}
    </div>
  </div>
);

export const featured = () => (
  <Container>
    <BlogCard
      type="featured"
      author={blogAuthor}
      meta={blogMeta}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const featuredWithSocialLinks = () => (
  <Container>
    <BlogCard
      type="featured"
      author={blogAuthor}
      meta={blogMeta}
      social={blogSocial}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const featuredWithSocialLinksAndTags = () => (
  <Container>
    <BlogCard
      type="featured"
      author={blogAuthor}
      meta={blogMeta}
      social={blogSocial}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const regular = () => (
  <Container width="400px">
    <BlogCard
      type="regular"
      author={blogAuthor}
      meta={blogMeta}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const regularWithSocialLinks = () => (
  <Container width="400px">
    <BlogCard
      type="regular"
      author={blogAuthor}
      social={blogSocial}
      meta={blogMeta}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const regularWithSocialLinksAndTags = () => (
  <Container width="400px">
    <BlogCard
      type="regular"
      author={blogAuthor}
      social={blogSocial}
      meta={blogMeta}
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);
