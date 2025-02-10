# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## My Notes

- [How to create an empty branch in Git](https://www.shellhacks.com/git-create-empty-branch/)

- [How to add prettier plugin to astro projects](https://astro-tips.dev/tips/prettier/)

## Integrating Google Fonts with Tailwind CSS

To integrate Google Fonts with Tailwind CSS using the `@import` rule, follow these steps:

1. **Choose your Google Fonts**: Select the fonts you want to use from the Google Fonts library and note the font family names (e.g., "Poppins", "Oswald", etc.).
2. **Create a CSS file**: Create a new CSS file (e.g., `fonts.css`) where you'll import the Google Fonts and define the font families.
3. **Use the `@import` rule**: In your `fonts.css` file, add the following code to import the Google Fonts:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
```

Replace `Poppins` with the font family name you chose in step 1. The `wght` parameter specifies the font weights to include (in this example, 400, 500, and 600). You can adjust this to include more weights or specific font styles. 4. **Define the font families**: In the same `fonts.css` file, define the font families using the `@font-face` rule:

```css
@font-face {
  font-family: "Poppins";
  src:
    url("https://fonts.gstatic.com/s/poppins/v20/S6u3r9k0xGK-D7zC9QF0v5DhzYHzoiLJ.woff2")
      format("woff2"),
    url("https://fonts.gstatic.com/s/poppins/v20/S6u3r9k0xGK-D7zC9QF0v5DhzYHzoiLJ.woff")
      format("woff");
  font-weight: 400;
  font-style: normal;
}
```

This code defines the `Poppins` font family, specifying the font files to use (`.woff2` and `.woff`) and the font weights (400). 5. **Configure Tailwind CSS**: In your `tailwind.config.js` file, update the `theme.fontFamily` section to include the custom font families:

```js
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Poppins", "system-ui"],
      serif: ["..."],
      // Add more font families as needed
    },
  },
};
```

In this example, `Poppins` is added as a custom sans-serif font family, alongside the default `system-ui` font family. 6. **Use the font classes**: In your HTML or CSS files, use the Tailwind CSS classes to apply the custom font families. For example:

```html
<p class="font-sans">This text uses the Poppins font.</p>
```

This code applies the `font-sans` class, which is configured to use the `Poppins` font family.

By following these steps, you've successfully integrated Google Fonts with Tailwind CSS using the `@import` rule. You can now use the custom font families throughout your project.

## Handling Hover over a Group

<https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state>

Using the `group` and `group-hover` modifiers.

## Creating a Photo Album in Astro

Using `Cloudinary` and Astro

https://youtu.be/Bfr2avUc7rA?si=DMD27gdgIpWGxdkZ


Added Google Analytics