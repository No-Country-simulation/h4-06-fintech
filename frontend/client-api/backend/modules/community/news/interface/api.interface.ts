import { GetAllResponse } from "./getAll";
import { GetOneParams, GetOneResponse } from "./getOne";

export interface NewsApi {
  getAll: () => Promise<GetAllResponse>;
  getOne: (params: GetOneParams) => Promise<GetOneResponse>;
}