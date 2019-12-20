import React from "react";

import { Heading } from "./Heading";
import { Baseline, FontFamily } from "../development";

export default {
  component: Heading,
  title: "Core|Typography/Heading"
};

export const heading = () => (
  <>
    <FontFamily />
    <Heading>Heading default - H1</Heading>
    <Heading size="h1">Heading H1 (xxl)</Heading>
    <Heading size="h2">Heading H2 (xl)</Heading>
    <Heading size="h3">Heading H3 (lg)</Heading>
    <Heading size="h4">Heading H4 (md)</Heading>
    <Heading size="h5">Heading H5 (sm)</Heading>
  </>
);
export const headingWithBaseline = () => (
  <>
    <Baseline />
    <Heading>Heading default - H1</Heading>
    <Heading size="h1">Heading H1 (xxl)</Heading>
    <Heading size="h2">Heading H2 (xl)</Heading>
    <Heading size="h3">Heading H3 (lg)</Heading>
    <Heading size="h4">Heading H4 (md)</Heading>
    <Heading size="h5">Heading H5 (sm)</Heading>
  </>
);
