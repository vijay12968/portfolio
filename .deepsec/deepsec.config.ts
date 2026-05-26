import { defineConfig } from "deepsec/config";

export default defineConfig({
  projects: [
    { id: "portfolio", root: ".." },
    // <deepsec:projects-insert-above>
  ],
});
