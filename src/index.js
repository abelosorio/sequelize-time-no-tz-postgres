'use strict';

const withParentTimeNoTz = require('./with_parent_time_no_tz');
const withPostgresTimeNoTz = require('./with_postgres_time_no_tz');

module.exports = function (DataTypes) {
  return withPostgresTimeNoTz(
    withParentTimeNoTz(DataTypes)
  );
};
