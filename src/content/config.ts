import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  cloudinary_photography: defineCollection({
    loader: cldAssetsLoader({
      // to display home folder leave empty: ""
      folder: "photography",
      context: true,
    }),
  }),
  cloudinary_expenseTracker: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/expense-tracker",
      context: true,
    }),
  }),
  cloudinary_flavourTown: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/flavour-town-subs",
      context: true,
    }),
  }),
  cloudinary_notepad: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/notepad-website",
      context: true,
    }),
  }),
  cloudinary_panelSync: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/panel-sync",
      context: true,
    }),
  }),
  cloudinary_simplyTasks: defineCollection({
    loader: cldAssetsLoader({
      folder: "portfolio-projects/simply-tasks",
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
