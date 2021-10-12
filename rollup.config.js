import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/index.ts",
  output: {
    format: "es",
    file: "dist/rollup/index.mjs",
    sourcemap: false,
  },
  plugins: [
    esbuild({
      experimentalBundling: true,
      minify: true,
      loaders: {
        // needed for elliptic :(
        ".json": "json",
      },
    }),
  ],
};
