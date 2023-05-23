import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescripLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescripLoader];
}
