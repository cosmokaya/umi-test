import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/umi-test/',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
