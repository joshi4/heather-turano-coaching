import React from "react";

import { FontFamily } from "./FontFamily";

export const addFont = (storyFn: any) => (
  <div>
    <FontFamily />
    {storyFn()}
  </div>
);
