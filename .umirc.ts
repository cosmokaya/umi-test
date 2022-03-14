import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: './',
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
