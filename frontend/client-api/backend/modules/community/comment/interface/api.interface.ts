import { CreateParams } from "./create";

export interface CommentApi {
  create: (params: CreateParams) => Promise<void>
}