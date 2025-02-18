import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  cloudinary_photography: defineCollection({
    loader: cldAssetsLoader({
      folder: "photography",
      limit: 11,
      context: true,
    }),
  }),
  cloudinary_expenseTracker: defineCollection({
    loader: cldAssetsLoader({
      // to display home folder leave empty: ""
      folder: "portfolio-projects/expense-tracker",
      context: true,
    }),
  }),
  cloudinary_fairviewGolfClub: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/fairview-golf-club",
      context: true,
    }),
  }),
  cloudinary_notepad: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/notepad-website",
      // defaults the limit to 10
      limit: 17,
      context: true,
    }),
  }),
  cloudinary_panelSync: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/panel-sync",
      limit: 24,
      context: true,
    }),
  }),
  cloudinary_saah: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/saah",
      limit: 31,
      context: true,
    }),
  }),
  cloudinary_shinjukuOmoide: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/shinjuku-omoide",
      limit: 31,
      context: true,
    }),
  }),
  cloudinary_simplyTasks: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/simply-tasks",
      limit: 14,
      context: true,
    }),
  }),
  cloudinary_subsationalSubs: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/subsational-subs",
      context: true,
    }),
  }),
};
