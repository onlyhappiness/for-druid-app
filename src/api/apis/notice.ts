import api from '..';
import {ICreateNotice} from '../types/notice';

//** 공지사항 보기 */
export const getAllNotice = async () => {
  const res = await api.get('/notice');

  return res;
};

//** 공지사항 생성 */
export const createNotice = async (req: ICreateNotice) => {
  const res = await api.post('/notice', req);

  return res;
};

//** 공지사항 상세 */
export const getNotice = async (noticeId: number) => {
  const res = await api.get(`/notice/${noticeId}`);

  return res;
};

//** 공지사항 수정 */
export const updateNotice = async (noticeId: number) => {
  const res = await api.put(`/notice/${noticeId}`);

  return res;
};

//** 공지사항 삭제 */
export const deleteNotice = async (noticeId: number) => {
  const res = await api.delete(`/notice/${noticeId}`);

  return res;
};
