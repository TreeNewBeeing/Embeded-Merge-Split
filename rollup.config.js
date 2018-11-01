import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

var env = 'production'
export default {
    input: "./src/index.js",
    output: {
        file: './build/bundle.js',
        format: "es"
    },
    plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify(env)
        }),
        babel({
          exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
}