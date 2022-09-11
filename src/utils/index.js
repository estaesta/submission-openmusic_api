/* eslint-disable camelcase */
const mapSongByIdToModel = (song) => ({
  ...song,
  albumId: song.album_id,
});

module.exports = { mapSongByIdToModel };
