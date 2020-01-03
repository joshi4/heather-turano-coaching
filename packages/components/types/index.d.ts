declare var __DEV__: boolean;

declare module "*.jpg" {
  const fileName: string;
  export = fileName;
}
