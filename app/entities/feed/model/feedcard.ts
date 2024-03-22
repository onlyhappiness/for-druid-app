import { IUser } from "./user";

export interface IFeedCard {
  id: number;
  createdAt: string;
  updatedAt: string;
  content: string;
  likes_count: number;
  comment_count: number;
  User: IUser;
  is_like?: boolean;
}
