import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
// import del from "rollup-plugin-delete";

const packageJson = require("./package.json");
// const playgroundComponents = "playground/src/generated-components";

export default [
  {
    input: "src/index.ts",
    // external: ["styled-components"],
    output: [
      // {
      //   file: playgroundComponents + "/index.js",
      //   format: "esm",
      //   banner: "/* eslint-disable */",
      // },
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      // del({ targets: ["dist/*", playgroundComponents] }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      // postcss(),
    ],
  },
  {
    input: "./dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
