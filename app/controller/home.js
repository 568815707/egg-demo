'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const id = 1
    const value = await ctx.service.home.find(id)
    this.ctx.body = {
      data: value
    };
  }
  async insert() {
    const { ctx } = this
    const values = ctx.query
    await ctx.service.home.insert(values)
    this.ctx.body = {
      code: 20000
    }
    
  }
}

module.exports = HomeController;
