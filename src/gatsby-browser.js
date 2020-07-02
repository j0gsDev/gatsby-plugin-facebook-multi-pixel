exports.onRouteUpdate = function ({location}, pluginOptions) {
  // Don't track while developing.
  for (const key in pluginOptions) {
    if (key && key !== 'plugins') {
      const scriptOpts = pluginOptions[key]
      if (process.env.NODE_ENV === "production" && typeof fbq === "function" && scriptOpts.viewContent) {
        fbq('trackSingle', scriptOpts.pixelId, 'ViewContent');
      }
    }
  }
};