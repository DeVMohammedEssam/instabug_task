module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@Components": "./src/components",
          "@Views": "./src/views",
          "@Assets": "./src/assets"
        }
      }
    ]
  ]
};
