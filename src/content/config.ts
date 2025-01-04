import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  cloudinaryAssets: defineCollection({
    loader: cldAssetsLoader({
      // to display home folder leave empty: ""
      folder: "",
      context: true,
    }),
  }),
  cloudinaryTestPhotos: defineCollection({
    loader: cldAssetsLoader({
      folder: "test",
      context: true,
    }),
  }),
};
