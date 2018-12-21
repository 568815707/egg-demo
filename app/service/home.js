'use strict';

const Service = require('egg').Service;
class HomeService extends Service {
  async find(id) {
    const user = await this.app.mysql.query(
      'SELECT * FROM test WHERE id = ?', id
    )
    return user
  }
  async insert({name, age}) {
    await this.app.mysql.insert('test', { name: name, age: age })
  }
}

module.exports = HomeService;
