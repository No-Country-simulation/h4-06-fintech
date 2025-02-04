import { GetAllResponse } from "./getAll";
import { GetOneResponse } from "./getOne";

export interface NewsApi {
  getAll: () => Promise<GetAllResponse>;
  getOne: () => Promise<GetOneResponse>;
}