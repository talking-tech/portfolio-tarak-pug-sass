const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/assets/scripts/main.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: false,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      /*  {
          test: /\.toml$/,
          type: "json",
          parser: {
            parse: toml.parse,
          },
        },
        {
          test: /\.yaml$/,
          type: "json",
          parser: {
            parse: yaml.parse,
          },
        },
        {
          test: /\.json5$/,
          type: "json",
          parser: {
            parse: json5.parse,
          },
        },*/
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.pug",
    }),
  ],
};
