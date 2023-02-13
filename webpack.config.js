const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared:
    share({
      "@angular/common": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
        includeSecondaries: {
            skip: ['@angular/common/http/testing']
        }
      },
      "@angular/core": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
      "@angular/router": {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto'
      },
    })

});
