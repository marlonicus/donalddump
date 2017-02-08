import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: `src/main.js`,
  dest: `dist/main.min.js`,
  format: `iife`,
  plugins: [
    nodeResolve({
      jsnext: true,
    }),
    babel({
      babelrc: false,
      exclude: `node_modules/**`,
      plugins: [`transform-object-rest-spread`],
      presets: [`es2015-rollup`],
    }),
    commonjs({
      include: `node_modules/**`,
    }),
    livereload({
      watch: `dist`,
    }),
  ],
}