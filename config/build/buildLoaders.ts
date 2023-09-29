import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const typScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typScriptLoader,
    ]
}