import {ICreateCommunity} from '@api/types/community';
import api from '..';

//** 커뮤니티 보기 */
export const getCommunityList = async (page: number) => {
  const res = await api.get(`/community?page=${page}`);

  return res?.data?.data;
};

//** 커뮤니티 생성 */
export const createCommunity = async (req: ICreateCommunity) => {
  const res = await api.post('/community', req);

  return res;
};

//** 커뮤니티 상세 */
export const getCommunity = async (communityId: number) => {
  const res = await api.get(`/community/${communityId}`);

  return res;
};

//** 커뮤니티 수정 */
export const updateCommunity = async ({
  communityId,
  req,
}: {
  communityId: number;
  req: ICreateCommunity;
}) => {
  const res = await api.put(`/community/${communityId}`, req);

  return res;
};

//** 커뮤니티 삭제 */
export const deleteCommunity = async (communityId: number) => {
  const res = await api.delete(`/community/${communityId}`);

  return res;
};
