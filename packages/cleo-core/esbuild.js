const { build } = require("esbuild");

build({
  entryPoints: ["./src/index.ts"],
  minify: false,
  define: {
    "process.env.NODE_ENV": '"development"'
  },
  outfile: "./dist/index.js",
  bundle: true,
  target: "es2017",
  format: "esm",
  sourcemap: "external",
  external: ["react", "react-dom"],
}).then(console.log, console.error);