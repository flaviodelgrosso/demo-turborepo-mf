import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { dependencies } from './package.json';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
    open: false,
  },
  moduleFederation: {
    options: {
      name: 'remote',
      exposes: {
        './RemoteApp': './src/App.tsx',
      },
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    },
  },
});
