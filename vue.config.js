const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer:{
    // host:'127.0.0.1',
    port:9101,
    headers:{
        "Access-Control-Allow-Origin":'*'
    }
  },
}
