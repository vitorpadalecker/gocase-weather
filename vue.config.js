module.exports = {
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*"},
      proxy: "http://api.weatherapi.com/v1/forecast.json?key=bd48aaabe89a4b1d83c02411221603&q=brazil",
    },
  },
};