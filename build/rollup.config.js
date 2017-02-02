import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'

export default {
  entry: `src/main.js`,
  dest: `dist/main.min.js`,
  format: `iife`,
  plugins: [
    commonjs({
      include: `node_modules/**`,
    }),
    babel({
      exclude: `node_modules/**`,
      plugins: [`transform-object-rest-spread`],
      presets: [`babel-preset-es2015-rollup`],
    }),
    livereload({
      watch: `dist`,
    }),
  ],
}