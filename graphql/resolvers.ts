import NewsService from "../services/newsService";
import UserService from "../services/userService";

const resolvers = {
  
  newsList: async () => await NewsService.get(),

  newsGetById: async (args) => {
    return await NewsService.getById(args.id);
  },

  addNews: async (args) => {
    return await NewsService.create(args.input);
  },

  updateNews: async (args) => {
    return await NewsService.update(args.input._id, args.input);
  },

  deleteNews: async (args) => {
    return await NewsService.delete(args.id);
  },

  // User
  usersList: async () => await UserService.get()

}

export default resolvers;