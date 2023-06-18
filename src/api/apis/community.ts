import api from '..';

//** 커뮤니티 보기 */
export const getCommunityList = async (page: number) => {
  const res = await api.get(`/community?page=${page}`);

  return res;
};

//** 커뮤니티 생성 */

//** 커뮤니티 상세 */

//** 커뮤니티 수정 */

//** 커뮤니티 삭제 */
