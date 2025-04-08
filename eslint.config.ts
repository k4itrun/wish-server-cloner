import eslintConfig from "@k4i/eslint-config";

export default [
 // prettier
 ...eslintConfig.base,
 ...eslintConfig.node,
 ...eslintConfig.typescript,
 ...eslintConfig.prettier,
];