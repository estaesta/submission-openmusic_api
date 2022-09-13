const routes = (handler) => [
  {
    method: 'get',
    path: '/playlists/{id}/activities',
    handler: handler.getActivitiesHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
];

module.exports = routes;
