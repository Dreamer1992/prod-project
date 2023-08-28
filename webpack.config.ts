import webpack from 'webpack'
import path from 'path'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'

// types
import { IBuildEnv, IBuildPaths } from './config/build/types/config'

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const MODE = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = MODE === 'development'
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  })

  return config
}
