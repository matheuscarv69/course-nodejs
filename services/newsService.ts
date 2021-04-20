import NewsRepository from '../repositories/newsRepository';

class NewsService {


  async search(term) {
    /**
     * Busca no mongo usando Regex, onde: procura-se por toda noticia 
     * que tiver o termo passado tanto no inicio como no final,
     * ignorando o case sensitive ('i')
     */
    let result = await NewsRepository.find({ 'title': new RegExp('.*' + term + '*.', 'i'), 'active': true }).sort({ publishDate: - 1 });
    return result;
  }

  async get() {
    /**
     * Ordernando por publishDate
     * Usando o sort para ordenar as noticias da mais recente  
     * para a mais antiga (-1), da mais antiga pra mais recente (1)
     * 
     *  Limitando resultados: .limit(qtd de resultados)
     **/
    let result = await NewsRepository.find({}).sort({ publishDate: -1 });
    return result;
  }

  async getById(_id) {
    let result = await NewsRepository.findById(_id);
    return result;
  }

  async create(news) {
    news.publishDate = new Date();
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