import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

const name = `vueDirectiveTooltip`;

const plugins = [
    babel(),
    nodeResolve({
        module: true,
        jsnext: true
    }),
    commonjs({
        include: `node_modules/**`
    }),
    vue({compileTemplate: true}),
    buble()
];

const isProd = process.env.NODE_ENV === `production`;
if (isProd) plugins.push(uglify());

export default {
    entry: `src/index.js`,
    plugins,
    dest: `dist/${name}${isProd ? `.min` : ``}.js`,
    moduleName: name,
    format: `umd`
};
