# Next Boilerplate

Next Boilerplate is a template repository to quickly start a new [Next.js](https://nextjs.org/docs/getting-started) project.

## Getting started
Next Boilerplate was bootstrapped with Next.js. Please, read the docs to get up to speed with how pages, routing, server-side functions and more works.

### Run development environment
`yarn dev` or `npm run dev` - starts the development environment with auto reloading and all that good stuff.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scripts
Besides the development script, there are many more scripts set up:

* `build` - Creates build
* `export` - Creates export
* `deploy` - Creates build and export
* `storybook` - Starts the development environment for storybook
* `storybook:build` - Builds the storybook for production to be hosted by you
* `test` - Runs the Jest and Enzyme test suite
* `test:watch` - Runs the Jest and Enzyme test suite in watch mode
* `test:coverage` - Runs the Jest and Enzyme test suite and shows test coverage
* `eslint` - Runs ESLint for all TypeScript files
* `stylelint` - Runs Stylelint for all SCSS files

### Configuration
#### Meta information (SEO)
Boilerplate loads some meta information in the head for SEO and social media platforms. You can easily alter the meta information in `meta.config.js` to your liking.

#### Progressive Web App (PWA)
By default, Next Boilerplate loads a service worker (`public/sw.js`) and a manifest file (`public/manifest.json`). The PWA caches all requests to be used offline and uses the manifest to meet the minimum requirements of a PWA to be installable. You can alter these files to your liking.

### Tech stack
#### Next.js
Next Boilerplate uses [Next.js](https://nextjs.org/)  to
* provide SSR and SSG [React.js](https://reactjs.org/). Pages are automatically optimised to deliver the best experience.
* handle routing
* generate builds
* and more

#### TypeScript
Next Boilerplate used [TypeScript](https://www.typescriptlang.org/) for static checking and documentation. You can view the Typescript config in [./tsconfig.json](./tsconfig.json).

#### Jest and Enzyme
Next Boilerplate uses Jest and Enzyme as the testing suite. All tests can be found in the component and utilities folders with `.test.` postfix. As you may notice, we don't import Jest and Enzyme in the test files. Some things are setup in `config/tests`. Next to that, mock content and components can be found in `config/tests/mocks`.

#### Storybook
Next Boilerplate uses [Storybook](https://storybook.js.org/) for showcasing components. Storybook has its own webpack configuration. You can find this configuration in `.storybook/webpack.config.js` together with all other Storybook specific items.

#### Husky, ESLint, StyleLint and LintStaged
Next Boilerplate uses Husky to automatically run ESLint, Stylelint, LintStaged and the test suite for every commit. This is done by using the `precommit` script found in `package.json`. Never run `--no-verify` as you don't want to ignore these settings. If you have an issue with the config, please update the config file of that linter accordingly.