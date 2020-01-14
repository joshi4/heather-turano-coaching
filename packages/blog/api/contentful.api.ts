import { createClient, AssetCollection } from "contentful";

const contentApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
});

export const getAllAssets = async (): Promise<AssetCollection> => {
  const assets = contentApi.getAssets();
  return assets;
};
