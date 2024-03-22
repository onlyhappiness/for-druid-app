export interface IUser {
  id: number;
  createdAt: string;
  updatedAt: string;
  loginType: string;
  signname: string;
  phone: string;
  image: string | null;
}
