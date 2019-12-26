import { createGlobalStyle } from "styled-components";

import { makeFontFace } from "@heather-turano-coaching/design-system/utils";

export const FontFamily = createGlobalStyle`
  ${makeFontFace()}
`;
