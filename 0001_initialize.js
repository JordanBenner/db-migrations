//up down migrations
exports.up = (pgm) => {
};
exports.down = (pgm) => {
};

//
exports.up = (pgm, run) => {
  pgm.createTable('reviewer', {
    id: 'id',
    name: {type: 'varchar(75)'}
  });
  run();
};

exports.down = (pgm, run) => {
  pgm.dropTable('reviewer');
  run();
};

// adding migrations//
exports.up = (pgm, run) => {
  pgm.addColumns(
    'reviewer',
    {date_joined: {type: 'date'}}
  );
  run();
};
exports.down = (pgm, run) => {
  pgm.dropColumns('reviewer', ['date_joined']);
  run();
};
