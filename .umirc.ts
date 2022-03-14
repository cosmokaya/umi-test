import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/umi-test/',
  publicPath: './',
  // routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  hash: true,
});
