import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const input = 'src/index.ts'

const globals = {
  react: 'React',
}

const external = Object.keys(globals)

const extensions = ['.ts', '.tsx']

const output = {
  globals,
  name: 'UsefulComponents',
  format: 'umd',
}

const babelOptions = {
  extensions,
  babelHelpers: 'bundled',
  exclude: 'node_modules/**',
  presets: ['@babel/typescript', '@babel/env', '@babel/react'],
}

export default [
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.js',
    },
    plugins: [
      resolve({
        extensions,
      }),
      babel(babelOptions),
      postcss(),
    ],
  },
  {
    input,
    external,
    output: {
      ...output,
      file: 'dist/bundle.min.js',
    },
    plugins: [
      resolve({
        extensions,
      }),
      babel(babelOptions),
      postcss({
        minimize: true,
      }),
      terser(),
    ],
  },
]
