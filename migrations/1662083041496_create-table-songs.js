/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      required: true,
    },
    year: {
      type: 'SMALLINT',
      required: true,
    },
    performer: {
      type: 'TEXT',
      required: true,
    },
    genre: {
      type: 'TEXT',
      required: true,
    },
    duration: {
      type: 'INTEGER',
      required: false,
    },
    album_id: {
      type: 'VARCHAR(50)',
      references: 'albums',
      required: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
