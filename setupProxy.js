const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://kiter-271715.appspot.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
