const path = require('path');

module.exports = {
    entry: './js/basicReactTs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.js'],
        modules: ["node_modules"],
    },
    module: {
        rules: [
            {
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
				options: {
					presets: ["es2015", "react", "stage-2"]
				}
			}
        ]
    }
}
