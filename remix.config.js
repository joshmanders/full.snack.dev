/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: './app',
  cacheDirectory: '../node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*'],
  serverModuleFormat: 'cjs',
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
