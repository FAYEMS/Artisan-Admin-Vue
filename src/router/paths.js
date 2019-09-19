export default [
  {
    name: 'auth',
    path: '/',
    component: () => import('@/views/auth/index'),
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('@/views/dashboard/index'),
  },
];
