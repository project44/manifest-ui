<p align="center">
  <!-- image here -->
</p>

<h1 align="center">Manifest UI</h1>

<p align="center">Design System themes and components for <a href="https://www.project44.com/" >project44</a>.</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/@manifest-ui/react">
    <img alt="" src="https://img.shields.io/npm/v/@manifest-ui/react.svg">
  </a>
  <a aria-label="contributors graph" href="https://github.com/project44/manifest-ui/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/project44/manifest-ui.svg">
  </a>
  <a aria-label="last commit" href="https://github.com/project44/manifest-ui/commits/main">
    <img alt="" src=
  "https://img.shields.io/github/last-commit/project44/manifest-ui.svg">
  </a>
  <a aria-label="license" href="https://github.com/project44/manifest-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/project44/manifest-ui.svg" alt="">
  </a>
</p>

Themeable design system for the project44.

## Documentation

Our documentation site lives at [zeroheight](https://zeroheight.com/27d9b4710). You'll be able to find detailed documentation on getting started, all of the components, our theme, our principles, and more.

## Installation

Install `@manifest-ui/react` and necessary peer dependencies in your project with your package manager of choice:

```sh
# with npm
npm install @manifest-ui/react

# with yarn
yarn add @manifest-ui/react
```

Note that you must have Chakra UI and all peer dependencies installed for your project as well. See the [installation instructions](https://chakra-ui.com/docs/getting-started#installation) of the Chakra UI docs.

```
# npm with peer dependencies
npm install @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

# yarn with peer dependencies
yarn add @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
```

## Usage

To start using the theme and components, please follow these steps:

Wrap your application with the `ThemeProvider` provided by **@manifest-ui/react**.

```jsx
import { ThemeProvider } from '@manifest-ui/react';

// Do this at the root of your application
function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

Optionally, you can wrap your application with the `ColorModeProvider` so you can toggle between light and dark mode within your app.

Now you can start using components like so!:

```jsx
import { Button } from '@manifest-ui/react';

function Example() {
  return <Button>Track shipment</Button>;
}
```

## Contributing

We love collaborating with folks inside and outside of project44 and welcome contributions!

> 👉 See the [contributing docs](https://github.com/project44/manifest-ui/blob/main/CONTRIBUTING.md) for more info on code style, testing, coverage, and troubleshooting
