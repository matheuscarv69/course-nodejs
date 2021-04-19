import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import NewsService from '../services/newsService';
import Helper from '../infra/helper';

class NewsController {

  async get(req, res) {

    try {
      // let client = redis.createClient(6379, 'redis');
      let client = redis.createClient();

      await client.get('news', async function (error, reply) {
        if (reply) {
          console.log('redis');
          // Json.parse é feito para converter o que tiver no redis para json
          Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply))
        } else {
          console.log('db');

          let result = await NewsService.get();
          client.set('news', JSON.stringify(result));
          client.expire('news', 20);
          Helper.sendResponse(res, HttpStatus.OK, result)
        }
      })
    } catch (error) {
      console.error.bind(console, `Error ${error}`)
    }

  }

  async search(req, res) {

    try {
      const term = req.params.term;

      // // deprecated
      //  ternarios usados para pegar os valores de pag e itens que devem ser retornados
      // const page = (req.params('page')) ? parseInt(req.params('page')) : 1;
      // const perPage = (req.params('limit')) ? parseInt(req.params('limit')) : 10;
      // // let result = await NewsService.search(term, page, perPage);

      let result = await NewsService.search(term);
      Helper.sendResponse(res, HttpStatus.OK, result);
    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }
  }

  async getById(req, res) {

    try {
      const _id = req.params.id;

      let result = await NewsService.getById(_id);
      Helper.sendResponse(res, HttpStatus.OK, result);
    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }
  }

  async create(req, res) {

    try {
      let vm = req.body;

      await NewsService.create(vm);
      Helper.sendResponse(res, HttpStatus.CREATED, "News created successfully");
    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }

  }

  async update(req, res) {
    try {
      const _id = req.params.id;
      let news = req.body;

      await NewsService.update(_id, news);
      Helper.sendResponse(res, HttpStatus.OK, "News updated successfully");

    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }
  }

  async delete(req, res) {

    try {
      const _id = req.params.id;

      await NewsService.delete(_id);
      Helper.sendResponse(res, HttpStatus.OK, "News deleted successfully");
    } catch (error) {
      console.error.bind(console, `Error ${error}`);
    }

  }
}

export default new NewsController();