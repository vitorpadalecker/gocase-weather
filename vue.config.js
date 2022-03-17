module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*"},
      proxy: "http://api.weatherapi.com/v1/forecast.json",
    },
  },
};