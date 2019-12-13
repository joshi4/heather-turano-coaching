import React from "react";

import { InputGroup } from "./InputGroup";
import { Input } from "../Input";

export default {
  component: InputGroup,
  title: "Core|Forms/Layout"
};

export const base = () => (
  <InputGroup>
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </InputGroup>
);
export const stacked = () => (
  <InputGroup layout="stacked">
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </InputGroup>
);
export const inline = () => (
  <InputGroup layout="inline">
    <Input name="firstName" placeholder="First name" />
    <Input name="lastName" placeholder="Last name" />
    <Input name="address" placeholder="Address" />
  </InputGroup>
);
