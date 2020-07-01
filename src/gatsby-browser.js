exports.onRouteUpdate = function({ location }, pluginOptions) {
  // Don't track while developing.
  for (const scriptOpts of object) {
    if (process.env.NODE_ENV === `production` && typeof fbq === `function` && scriptOpts.viewContent) {
      fbq('trackSingle', scriptOpts.pixelId, 'ViewContent');
    }
  }
};
