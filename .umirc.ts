import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath: './',
  routes: [{ path: '/umi-test', component: '@/pages/index' }],
  fastRefresh: {},
  hash: true,
});
