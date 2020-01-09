import React, { FC } from "react";

import { BlogCard, BlogUser } from "./BlogCard";

export default {
  component: BlogCard,
  title: "Blog|Card"
};

const user: BlogUser = {
  firstName: "heather",
  lastName: "turano",
  avatarImg: require("../../.storybook/assets/htc-avatar.jpg")
};

const Container: FC = ({ children }) => (
  <div style={{ backgroundColor: "#ccc" }}>
    <div
      style={{ maxWidth: "700px", margin: "0 auto", backgroundColor: "#ccc" }}
    >
      {children}
    </div>
  </div>
);

export const featured = () => (
  <Container>
    <BlogCard
      type="featured"
      user={user}
      datePublished="June 25th, 2019"
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);

export const regular = () => (
  <Container>
    <BlogCard
      type="regular"
      user={user}
      datePublished="June 25th, 2019"
      title="Pumping guide for flying &amp; traveling WITHOUT your baby"
      excerpt="Are you a breastfeeding mom who has anxiety about leaving your little one to travel? Well, at 6 months, I did it. A whole week in Palm Springs, CA without my baby girl. In this post, you will find my full experience with Pumping, Freezing, Packing, and Flying with Breast Milk. I will explain my pumping set up and schedule along with tips on packing and flying with over 100 oz of breast milk. Along with my encounter with TSA and airport experience."
    />
  </Container>
);
