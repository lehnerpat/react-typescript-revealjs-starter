# react-typescript-revealjs-starter

A starter for using [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Node](https://nodejs.org/en/) to create a [Reveal.js](https://revealjs.com/) presentation -- without runtime dependencies on React!

This is based on [react-typescript-jsless-static-site-generator-starter](https://gitlab.com/lehnerpat/react-typescript-jsless-static-site-generator-starter).

## Prerequisites

- Node.js in a current version (tested with v14, but should work with some prior versions too)
- Yarn or NPM

## Getting Started & Usage

1. Download the sources: either clone this repository or download as a [ZIP](https://gitlab.com/lehnerpat/react-typescript-revealjs-starter/-/archive/master/react-typescript-revealjs-starter-master.zip) or [TAR](https://gitlab.com/lehnerpat/react-typescript-revealjs-starter/-/archive/master/react-typescript-revealjs-starter-master.tar.gz) archive.

2. Install the NPM dependencies: in the root directory of this project, run:

   - `yarn install` (recommended) _or_ `npm install`

3. Get Reveal.js:

   - Download [the ZIP file](https://github.com/hakimel/reveal.js/archive/master.zip) (or follow [the Reveal.js installation instructions](https://revealjs.com/installation/)).
   - Unpack the Reveal.js files to the `reveal` directory.

4. Start the development server: in the root directory of this project, run:

   - `yarn start` (recommended) _or_ `npm start`
   - This builds the site and opens it in your browser. It also watches the sources for any changes, and automatically refreshes the site when changes are detected.

5. If you just want to build the presentation once (e.g. to put it onto a static hosting service), run:

   - `yarn build` (recommended) _or_ `npm build`

6. Edit the content of your presentation:

   - The slides are specified in `src/Slides.tsx` (which must export a component named `Slides`). You can split the content to other files, of course, using regular React components and TypeScript exports/imports.
   - The page content (i.e. the `<body>` element and its content) is specified in `src/Body.tsx`, which must export a component named `Body` that takes no props. If you want to add any more content outside of the slides, you can do this here.
   - The contents of the `<head>` element are specified in `src/HeadContent.tsx`, which must export a component named `HeadContent` that takes no props. Unlike `Body`, this renders only the _contents_ of `<head>`, not the entire element itself (because the build script must inject some additional elements, like styles).
   - If you want to change any Reveal.js settings / options, customize the file `src/InitializeRevealJs.tsx`.
   - If you want to change the Reveal.js theme or the code highlighting theme, customize the CSS paths in `src/HeadContent.tsx`.

7. Style your presentation with [`styled-components`](https://styled-components.com/).

8. Put any static files (e.g. images, robots.txt) in the `static` directory, and they'll be copied to the output directory. This happens recursively, i.e. directory structures inside `static` are copied over.

9. Customize your Reveal.js theme:

   - If you want to make any changes to the Reveal.js stylings, we recommend modifying the theme SCSS sources in `reveal/css/theme/source/`, or creating a new theme here by copying one of the existing ones.
   - To apply any changes there, you need to compile the SCSS sources to CSS files by running (in the project root directory):  
     `yarn build:reveal-scss` (recommended) _or_ `npm build:reveal-scss`.  
     If you have a development server running, it should pick up any changes and refresh automatically. Otherwise, just run another build of the presentation as described further above.

## Known Limitations

- You can't currently include any JavaScript interactivity in your React components. For example, you can't react to an element being clicked using an `onClick` handler.
