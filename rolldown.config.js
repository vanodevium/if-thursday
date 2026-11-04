import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/if-thursday.js",
  output: [
    {
      file: "if-thursday.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "if-thursday.js",
      format: "esm",
    },
  ],
});
