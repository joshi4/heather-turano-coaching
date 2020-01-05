import React from "react";

import { Carousel } from "./Carousel";
import { Heading } from "../typography";

export default {
  component: Carousel,
  title: "Basic|Carousel"
};

export const base = () => (
  <Carousel
    entries={[
      { country: "Marshall Islands", name: "Craig Steele" },
      { country: "Diego Garcia", name: "Clifford Carlson" },
      { country: "Madagascar", name: "Ethan Goodman" }
    ]}
  >
    {({ country, name }) => (
      <>
        <Heading fontSize="h2">{name}</Heading>
        <Heading fontSize="h5">{country}</Heading>
      </>
    )}
  </Carousel>
);
