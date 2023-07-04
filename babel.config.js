module.exports = function(api) {
  ["nativewind/babel"],
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
