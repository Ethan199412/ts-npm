const path = require('path')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "http://localhost:3001/dist/",
        filename: "bundle.js",
        libraryTarget: 'umd'
    },
    module: {
        rules: [

            // 某一种类型的文件一旦找到了一种 rules，就不会去再匹配其他 loaders。
            // 如果需要同一种类型文件匹配多个 rules，从 oneOf 中拿出去。

            {
                test: /\.tsx?$/,
                use: [
                    // { loader: 'thread-loader', options: { workers: 3 } },
                    {
                        loader: 'babel-loader',
                        options: {
                            // 启用缓存机制，在重复打包未改变过的模块时防止二次编译，同时加快打包速度
                            cacheDirectory: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        // 不仅提升了性能，也解决了 ts-loader 和 thread-loader 兼容性问题
                        options: {
                            happyPackMode: true
                        }
                    },
                ],
                exclude: /(node_modules|bower_components|dist)/,
            }


        ]
    },

    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx", "."] },
    mode: 'production'
};

