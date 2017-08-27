import baseConfig from './default'

export default {
  publicPath: `http://local.forseti.im:${baseConfig.http.port}/`,

  services: {
    base: `http://local.forseti.im:${baseConfig.http.port}/`,
    api: `http://local.forseti.im:${baseConfig.http.port}/`,
  },
}
