module.exports = {
  presets: [
    ["@babel/preset-react"], 
    ["@babel/preset-env", { targets: { node: "current" } }], 
    ["babel-preset-vite", { env: true, glob: false}]
  ],
};
