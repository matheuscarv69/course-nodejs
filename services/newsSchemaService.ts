import NewsSchemaRepository from '../repositories/newsSchemaRepository';

class NewsSchemaService {

  get(){
    return NewsSchemaRepository.find({});
  }

  getById(_id){
    return NewsSchemaRepository.findById(_id);
  }

}

export default new NewsSchemaService();