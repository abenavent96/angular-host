const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared:
    share({
      ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    })

});
