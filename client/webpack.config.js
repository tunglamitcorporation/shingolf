module: {
    rules: [{
            loader: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            options: { presets: ['@babel/env','@babel/preset-react'] }
        },
    ]
}