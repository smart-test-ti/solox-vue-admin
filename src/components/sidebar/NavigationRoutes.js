export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'statistics',
      displayName: 'Statistics',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'tables',
          displayName: 'Tables',
        },
        {
          name: 'charts',
          displayName: 'Charts',
        },
      ],
    },
  ],
}
