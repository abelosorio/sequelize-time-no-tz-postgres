'use strict';

const inherits = require('./utils').inherits;
const getDataTypes = require('./utils').getDataTypes;
const getSequelize = require('./utils').getSequelize;

function withPostgresTimeNoTz(DataTypesOrSequelize) {
  const DataTypes = getDataTypes(DataTypesOrSequelize);
  const Sequelize = getSequelize(DataTypesOrSequelize);

  function TIME_NO_TZ(options) {
    if (!(this instanceof TIME_NO_TZ)) return new TIME_NO_TZ(options);
  };
  inherits(TIME_NO_TZ, DataTypes.TIME_NO_TZ);

  TIME_NO_TZ.prototype.parse = function(value) {
    return value;
  };

  DataTypes.postgres.TIME_NO_TZ = TIME_NO_TZ;

  // T_interval
  DataTypes.TIME_NO_TZ.types.postgres = {
    oids: [1083],
    array_oids: [1183]
  };

  if (Sequelize) {
    Sequelize.DataTypes = DataTypes;

    return Sequelize;
  }

  return DataTypes;
}

module.exports = withPostgresTimeNoTz;
