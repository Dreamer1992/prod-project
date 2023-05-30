import { ResolveOptions } from 'webpack'
import { IBuildOptions } from './types/config'

export function buildResolvers(buildOptions: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
