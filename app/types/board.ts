import { IUser } from "./user";

// 게시글
export interface IBoard {
  id: number;
  createdAt: string;
  updatedAt: string;
  content: string;
  likes_count: number;
  comment_count: number;
  User: IUser;
  is_like?: boolean;
}

// 게시글 생성
export interface IPostBoard {
  content: string;
}
