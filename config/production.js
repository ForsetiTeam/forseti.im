import baseConfig from './default'

export default {
  publicPath: `http://forseti.surge.sh${baseConfig.publicPath}`,

  services: {
    base: 'http://forseti.surge.sh/',
    api: 'http://forseti.surge.sh/',
  },
}
