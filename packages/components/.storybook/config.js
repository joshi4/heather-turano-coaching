import { configure, addDecorator } from "@storybook/react";

import { addFont } from "../src/development/StorybookDecorators";
import { withA11y } from "@storybook/addon-a11y";

addDecorator(withA11y);
addDecorator(addFont);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);
