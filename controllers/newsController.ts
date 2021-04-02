import NewsService from '../services/newsService';
import * as HttpStatus from 'http-status';

class NewsController {

  sendResponse = function (res, statusCode, data) {
    return res.status(statusCode).json({ result: data });
  }

  get(req, res) {
    NewsService.get()
      .then(news => this.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

  getById(req, res) {
    const _id = req.params.id;

    NewsService.getById(_id)
      .then(news => this.sendResponse(res, HttpStatus.OK, news))
      .catch(error => console.error.bind(console, `Error ${error}`))
  }

  create(req, res) {

  }

  update(req, res) {

  }

  delete(req, res) {

  }


}

export default new NewsController();