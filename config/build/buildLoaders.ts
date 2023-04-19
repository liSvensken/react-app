/**
 * babelLoader. Возможные плагины:
 * use => options => plugins: [ <...> ]
 * (не забыть также добавить в plugins[] в файле babel.config.json)
 * 1) i18next-extract для удобства быстрого создания json файлов с ключами для i18n
 * 		https://www.npmjs.com/package/babel-plugin-i18next-extract
 * 		"i18next-extract",
 * 				[
 * 					"i18next-extract",
 * 					{ locales: ['ru', 'en'], keyAsDefaultValue: true }
 * 				]
 * 	2)
 * */

import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env'],
			}
		}
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					},
				}
			},
			'sass-loader',
		]
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	]
}
