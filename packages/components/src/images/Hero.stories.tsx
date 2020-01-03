import React from "react";

import { Hero } from "./Hero";

import dandilion from "../development/images/dandilion.jpg";
import { Heading } from "../typography";

export default {
  component: Hero,
  title: "Basic|Images/Hero"
};

export const base = () => (
  <Hero image={dandilion} alt="versailles-dandilion">
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
export const noContent = () => (
  <Hero image={dandilion} alt="versailles-dandilion" />
);
export const withWhiteBorder = () => (
  <Hero
    image={dandilion}
    alt="versailles-dandilion"
    borderColor={{ fixed: "light" }}
  >
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
export const withGradient = () => (
  <Hero
    image={dandilion}
    alt="versailles-dandilion"
    borderColor={{ fixed: "light" }}
    gradient={{ scalable: { color: "secondary" } }}
  >
    <Heading fontSize="h1">Title here</Heading>
  </Hero>
);
