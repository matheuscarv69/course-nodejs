import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import NewsService from '../services/newsService';
import Helper from '../infra/helper';

class NewsController {

  get(req, res) {

    let client = redis.createClient();

    client.get('news', function (error, reply) {
      if (reply) {
        // Json.parse é feito para converter o que tiver no redis para json
        Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply))
      } else {
        NewsService.get()
          .then(news => {
            client.set('news', JSON.stringify(news));
            client.expire('news', 20);

            Helper.sendResponse(res, HttpStatus.OK, news)
          })
          .catch(error => console.error.bind(console, `Error ${error}`))
      }
    })



  }

  getById(req, res) {
    const _id = req.params.id;

    NewsService.getById(_id)
      .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

  create(req, res) {
    let vm = req.body;

    NewsService.create(vm)
      .then(news => Helper.sendResponse(res, HttpStatus.CREATED, "News created successfully"))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

  update(req, res) {
    const _id = req.params.id;
    let news = req.body;

    NewsService.update(_id, news)
      .then(news => Helper.sendResponse(res, HttpStatus.OK, "News updated successfully"))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

  delete(req, res) {
    const _id = req.params.id;

    NewsService.delete(_id)
      .then(() => Helper.sendResponse(res, HttpStatus.OK, "News deleted successfully"))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

}

export default new NewsController();