import React from "react";

import { Heading } from "./Heading";

export default {
  component: Heading,
  title: "Core|Typography/Heading"
};

export const heading = () => (
  <>
    <Heading>Heading default - H1</Heading>
    <Heading size="h1">Heading XL - H1</Heading>
    <Heading size="h2">Heading LG - H2</Heading>
    <Heading size="h3">Heading MD - H3</Heading>
    <Heading size="h4">Heading SM - H4</Heading>
  </>
);
