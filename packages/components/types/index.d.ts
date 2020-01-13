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
