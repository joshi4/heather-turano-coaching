import React from "react";

import { Avatar } from "./Avatar";

const Moana = require("../../.storybook/assets/moana.jpg");

export default {
  component: Avatar,
  title: "Basic|Avatar"
};

export const base = () => <Avatar image={Moana} alt="testing" />;
export const allSizes = () => (
  <>
    <Avatar image={Moana} alt="testing" size="h1" />
    <Avatar image={Moana} alt="testing" size="h2" />
    <Avatar image={Moana} alt="testing" size="h3" />
    <Avatar image={Moana} alt="testing" size="h4" />
    <Avatar image={Moana} alt="testing" size="h5" />
    <Avatar image={Moana} alt="testing" size="xxl" />
    <Avatar image={Moana} alt="testing" size="xl" />
    <Avatar image={Moana} alt="testing" size="lg" />
    <Avatar image={Moana} alt="testing" size="md" />
    <Avatar image={Moana} alt="testing" size="sm" />
    <Avatar image={Moana} alt="testing" size="xs" />
    <Avatar image={Moana} alt="testing" size="xxs" />
    <Avatar image={Moana} alt="testing" size={{ custom: 88 }} />
    <Avatar image={Moana} alt="testing" size={{ custom: 128 }} />
  </>
);
