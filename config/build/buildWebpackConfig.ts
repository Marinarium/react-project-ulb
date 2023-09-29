import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode,
        entry: paths.entry, //root project file, __dirname - our current location
        output: {
            filename: '[name].[contenthash].js', //main file after building
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    };
}