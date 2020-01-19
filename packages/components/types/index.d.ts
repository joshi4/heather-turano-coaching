declare var __DEV__: boolean;

declare module "*.jpg" {
  const fileName: string;
  export = fileName;
}

declare module "*.png" {
  const fileName: string;
  export = fileName;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
