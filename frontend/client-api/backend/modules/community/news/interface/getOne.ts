export type GetOneResponse = News

export type GetOneParams = {
  id: string;
}

export type News = {
  id: number;
  title: string,
  content: string,
  source: string,
  dateNews: Date,
  category: string
}
