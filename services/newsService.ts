import NewsRepository from '../repositories/newsRepository';

class NewsService {


  async search(term) {
    /*
    * Busca no mongo usando Regex, onde: procura-se por toda noticia
    * que tiver o termo passado tanto no inicio como no final,
    * ignorando o case sensitive ('i')
    */
    let result = await NewsRepository.find({ 'title': new RegExp('.*' + term + '*.', 'i'), 'active': true })
    return result;
  }

  async get() {
    let result = await NewsRepository.find({});
    return result;
  }

  async getById(_id) {
    let result = await NewsRepository.findById(_id);
    return result;
  }

  async create(news) {
    let result = await NewsRepository.create(news);
    return result;
  }

  async update(_id, news) {
    let result = await NewsRepository.findByIdAndUpdate(_id, news);
    return result;
  }

  async delete(_id) {
    let result = await NewsRepository.findByIdAndRemove(_id);
    return result;
  }
}

export default new NewsService();