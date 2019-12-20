import { configure, addDecorator } from "@storybook/react";

import { addFont } from "../src/development/StorybookDecorators";

addDecorator(addFont);

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.tsx$/), module);
