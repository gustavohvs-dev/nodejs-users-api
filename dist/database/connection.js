"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'nodets'
    }
});
exports.default = knex;
