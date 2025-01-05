import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  cloudinary_denverZoo: defineCollection({
    loader: cldAssetsLoader({
      // to display home folder leave empty: ""
      folder: "denver-zoo",
      context: true,
    }),
  }),
};
