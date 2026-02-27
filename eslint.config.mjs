import { createReactConfig } from "../.github/packages/eslint-config/react.mjs";
export default createReactConfig({ ignores: ["dist-vite/**", "dts/**"] });
