/* eslint-disable camelcase */
const mapSongByIdToModel = ({
  id, title, year, performer, genre, duration, album_id,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId: album_id,
});

const mapSongsToModel = ({
  id, title, performer,
}) => ({
  id,
  title,
  performer,
});

module.exports = { mapSongByIdToModel, mapSongsToModel };
