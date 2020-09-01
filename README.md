# useful-components

[![NPM version](https://img.shields.io/npm/v/useful-components.svg)](https://www.npmjs.com/package/useful-components)
[![Build Status](https://travis-ci.org/dudusotero/useful-components.svg?branch=master)](https://travis-ci.org/dudusotero/useful-components)
[![Coverage Status](https://coveralls.io/repos/github/dudusotero/useful-components/badge.svg?branch=master)](https://coveralls.io/github/dudusotero/useful-components?branch=master)
[![minified-size](https://img.shields.io/bundlephobia/min/useful-components@latest.svg)](https://bundlephobia.com/result?p=useful-components@latest)
[![MIT License](https://img.shields.io/npm/l/useful-components.svg)](https://github.com/dudusotero/useful-components/blob/master/LICENSE)

![spinners](https://user-images.githubusercontent.com/15240969/61506027-cc63b180-a9ae-11e9-8569-9ee44ef3567c.gif)

CSS-only spinners for React from [loading.io](https://loading.io/css/)

- :scissors: &nbsp; **Zero** dependencies
- :collision: &nbsp; Written in **TypeScript**
- :rocket: &nbsp; **Tree-shaking** baked in
- :nail_care: &nbsp; No extra **CSS** imports

## Demo

Browse components and explore their props with [Storybook](https://dudusotero.github.io/useful-components).

## Quick Start

Install the package with `npm`

```sh
npm i useful-components
```

or `yarn` - whichever you prefer

```sh
yarn add useful-components
```

Import any spinner and customize it to your liking

```jsx
import { Ellipsis } from 'useful-components'

const Loader = props => (
  <>
    {/* Use defaults (color #fff, size 64px) */}
    <Ellipsis />

    {/* Pass props like color and size (more in demo) */}
    <Ellipsis color="#ffdf00" size={40} />

    {/* Pass a CSS class to get full control over styling */}
    <Ellipsis className="my-ellipsis" />
  </>
)
```

Complete info about props can be found in the [demo](https://dudusotero.github.io/useful-components).

## Prerequisites

This library imports its styles through JavaScript. To make it work, you may need to tweak your config.

### Create-React-App

No changes are required, as CRA already handles CSS. Feel free to skip this! :tada:

### Webpack

First, you'd need [`css-loader`](https://github.com/webpack-contrib/css-loader) to resolve CSS imports

```sh
npm i -D css-loader
```

Next, to render your styles, you can either

- extract CSS into an external file (e.g. `style.css`) and load it using `<link>` (with [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)) or
- inject CSS into `<style>` tag(s) in `<head>` section at runtime (i.e. when JS is executing, with [`style-loader`](https://github.com/webpack-contrib/style-loader))

Generally, you'd want to generate your CSS only once at build time, so we'll go with the former

```sh
npm i -D mini-css-extract-plugin
```

Lastly, add the following to your `webpack.config.js`

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }
  ]
},
plugins: [new MiniCssExtractPlugin()]
```

For more advanced options (caching, minification, etc.), see [`mini-css-extract-plugin` docs](https://github.com/webpack-contrib/mini-css-extract-plugin).

### Webpack with SSR

As with the config above, you'd need `css-loader`. Unfortunately, you can't use either [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90) or [`style-loader`](https://github.com/webpack-contrib/style-loader/pull/159) with server-side rendering. One workaround would be to ignore CSS in server config and instead extract it out on the front-end. In your `webpack.config.js`

```js
module.exports = [
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  },
  {
    module: {
      target: 'node',
      rules: [
        {
          test: /\.css$/,
          loader: 'css-loader',
          options: {
            onlyLocals: true
          }
        }
      ]
    }
  }
]
```

There are a few other caveats, so it's best to check with a working [SSR example](./examples/ssr). An alternative to this would be to use [`isomorphic-style-loader`](https://github.com/kriasoft/isomorphic-style-loader). There is also [`babel-plugin-css-modules-transform`](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform) that can strip away `require` statements on CSS files (you'd need to include `useful-components` under `babel-loader`).

### Rollup

If you use Rollup, consider [`rollup-plugin-postcss`](https://github.com/egoist/,rollup-plugin-postcss). It exposes an `extract` option to extract your styles into a `.css` file. Alternatively, you could use [`rollup-plugin-scss`](https://github.com/thgh/rollup-plugin-scss) or [`rollup-plugin-css-only`](https://github.com/thgh/rollup-plugin-css-only) which would do the same thing.

### Parcel

Parcel comes with [built-in support](https://parceljs.org/css.html) for `.css` files and `@import`s, so this library should work out of the box.

## CDN

> Be advised that it's recommended to use NPM for best performance and minimal CSS & JS footprint.

For development and debugging, use an unminified version

```html
<link
  rel="stylesheet" crossorigin="anonymous"
  href="https://unpkg.com/useful-components@latest/dist/style.css"
/>

<!-- Include react, react-dom, and prop-types development <script> tags above -->
<script crossorigin src="https://unpkg.com/useful-components@latest/dist/bundle.js"></script>
```

In production, use a minified and optimized version

```html
<link
  rel="stylesheet" crossorigin="anonymous"
  href="https://unpkg.com/useful-components@latest/dist/style.min.css"
/>

<!-- Include react and react-dom production <script> tags above -->
<script crossorigin src="https://unpkg.com/useful-components@latest/dist/bundle.min.js"></script>
```

## Browser Support

To allow for customization, the library uses [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) which are [supported](https://caniuse.com/#feat=css-variables) on all major browsers except IE 11.

## Examples

You will find further demos under `/examples` folder

- [UMD via CDN](./examples/cdn)
- [Create-React-App](./examples/cra)
- [Server-Side Rendering](./examples/ssr)

## Docs

Read about the rationale for the [styling solution](./docs/styling.md) and [build toolchain](./docs/tooling.md).

## Copyright

CSS spinners from [loading.io](https://loading.io/css/) are used under [CC0 license](https://creativecommons.org/share-your-work/public-domain/cc0/).
