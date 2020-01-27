"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var configs_1 = require("@heather-turano-coaching/design-system/configs");
exports.Baseline = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :root{\n    --color: #7ec3f140;\n    --baseline: ", "px;\n    --background-baseline: repeating-linear-gradient(\n      to bottom,\n      var(--color),\n      var(--color) 1px,\n      transparent 1px,\n      transparent var(--baseline)\n    );\n  }\n\n  html {\n    font-size: 16px;\n  }\n  html,\n  body {\n    height: 100vh;\n    width: 100wh;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: block;\n    background-image: var(--background-baseline);\n    background-size: var(--background-width) 100%;\n    background-position: 0 var(--baseline-offset);\n  }\n"], ["\n  :root{\n    --color: #7ec3f140;\n    --baseline: ", "px;\n    --background-baseline: repeating-linear-gradient(\n      to bottom,\n      var(--color),\n      var(--color) 1px,\n      transparent 1px,\n      transparent var(--baseline)\n    );\n  }\n\n  html {\n    font-size: 16px;\n  }\n  html,\n  body {\n    height: 100vh;\n    width: 100wh;\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: block;\n    background-image: var(--background-baseline);\n    background-size: var(--background-width) 100%;\n    background-position: 0 var(--baseline-offset);\n  }\n"])), configs_1.sizeConfig.baselineGrid);
var templateObject_1;
