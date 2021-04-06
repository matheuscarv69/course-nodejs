import * as mongoose from 'mongoose';

class Database {
  // private DB_URL = 'mongodb://link-db/db_portal'
  private DB_URL = 'mongodb://localhost:27017/db_portal'

  createConnection() {
    mongoose.connect(this.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    /**
    1 - O analisador de string de URL atual está obsoleto e será removido em uma versão futura. Para usar o novo analisador, passe a opção {useNewUrlParser: true} para MongoClient.connect.
    
    2 - O mecanismo de detecção e monitoramento de servidor atual foi descontinuado e será removido em uma versão futura. Para usar o novo mecanismo de descoberta e monitoramento do servidor, passe a opção {useUnifiedTopology: true} para o construtor MongoClient.
   
    3 - Collection.ensureIndex está obsoleto. Em vez disso, use createIndexes.
   
    4 - Aviso de depreciação : Mongoose: findOneAndUpdate()e findOneAndDelete()sem a useFindAndModifyopção definida como false estão obsoletos. Consulte:
    */

  }
}

export default Database;