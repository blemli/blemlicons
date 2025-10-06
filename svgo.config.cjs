module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          mergePaths: false, //keep the xml structure
          collapseGroups: false,
          cleanupIds: {
            remove: false,  // do not delete unused ids
            minify: false   // do not rename/shorten ids
          }
        },
        floatPrecision: 2
      }
    }
  ]
};
