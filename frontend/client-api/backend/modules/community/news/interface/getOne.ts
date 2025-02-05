export type GetOneResponse = News

export type GetOneParams = {
  id: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  source: string;
  dateNews: Date;
  category: string;
  createdAt: Date;
  comment: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  dateComment: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  newsId: string;
}
