const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
 webpack: {
  configure: {
   plugins: [
    new ModuleFederationPlugin({
     name: 'HostApp',
     remotes: {
        remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
     },
     shared: {
      react: {
       eager: true,
       singleton: true
      },
      'react-dom': {
       eager: true,
       singleton: true
      },
      'react-router-dom': {
       eager: true,
       singleton: true
      }
     }
    })
   ]
  },
 },
};