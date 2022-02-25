const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
const path = require('path');
const pages = {
    'ya-demo': {
        entry: `./src/main.js`,
        template: `./src/index.html`,
        filename: 'index.html'
    }
}
module.exports = {
    pages: pages,
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
}

