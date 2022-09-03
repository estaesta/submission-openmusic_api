/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('albums', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      required: true,
    },
    year: {
      type: 'SMALLINT',
      required: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('albums');
};
