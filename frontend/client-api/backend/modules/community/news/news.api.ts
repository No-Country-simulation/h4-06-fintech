// import envs from "config/envs";
import { NewsApi } from "./interface/api.interface";
import { newsData } from "./data/news";

// const BASE_URL = `${envs.BACKEND_URL}/news`

const newsApi: NewsApi = {
  async getAll() {
    // const url = BASE_URL

    return new Promise((resolve) => setTimeout(() => resolve(newsData), 2000))
  },
  async getOne() {
    // const url = BASE_URL

    return new Promise((resolve) => setTimeout(() => resolve(newsData[0]), 2000))
  },
}

export { newsApi }