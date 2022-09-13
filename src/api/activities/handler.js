/* eslint-disable no-underscore-dangle */
class ActivitiesHandler {
  constructor(activitiesService, playlisstService) {
    this._activitiesService = activitiesService;
    this._playlistsService = playlisstService;

    this.getActivitiesHandler = this.getActivitiesHandler.bind(this);
  }

  async getActivitiesHandler(request, h) {
    try {
      const { id } = request.params;
      const { id: credentialId } = request.auth.credentials;
      await this._playlistsService.verifyPlaylistAccess(id, credentialId);
      const activities = await this._activitiesService.getActivities(id);
      return {
        status: 'success',
        data: {
          playlistId: id,
          activities,
        },
      };
    } catch (error) {
      const response = h.response({
        status: 'fail',
        message: error.message,
      });
      response.code(error.statusCode);
      return response;
    }
  }
}

module.exports = ActivitiesHandler;
