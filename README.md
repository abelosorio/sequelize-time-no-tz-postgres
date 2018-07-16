# sequelize-time-no-tz-postgres

[![NPM version](https://img.shields.io/npm/v/sequelize-time-no-tz-postgres.svg)](https://www.npmjs.com/package/sequelize-time-no-tz-postgres)

Add support for **TIME** (without time zone) data-type for **PostgreSQL** in **Sequelize**.

## Motivation

Read:
-   https://github.com/sequelize/sequelize/issues/2572

## Install

```bash
npm install --save sequelize-time-no-tz-postgres
```

## Use to define models

`models/my_model.js`
```javascript
const withTimeNoTz = require('sequelize-time-no-tz-postgres');

module.exports = function (sequelize, SequelizeDataTypes) {
  const DataTypes = withTimeNoTz(SequelizeDataTypes);

  const MyModel = sequelize.define('myModel', {
    someTimeWithoutTzField: {
      type: DataTypes.TIME_NO_TZ
    },

    // ...
  });

  // ...

  return MyModel;
};
```

## Use in migrations

`migrations/<timestamp>-add-some-time-field-to-my-model.js`
```javascript
const withTimeNoTz = require('sequelize-time-no-tz-postgres');

module.exports = {
  up: function (queryInterface, SequelizeBase) {
    const Sequelize = withTimeNoTz(SequelizeBase);

    return queryInterface.addColumn('myModel', 'someTimeWithoutTzField', {
      type: Sequelize.TIME_NO_TZ
    });
  },

  // ...
};
```
