import {getCommunity, getCommunityList} from '@api/apis/community';
import {useQuery} from '@tanstack/react-query';

//** 커뮤니티 보기 */
export const useGetCommunityListQuery = (page: number) => {
  return useQuery(['communityList', page], () => {
    return getCommunityList(page);
  });
};

/** 커뮤니티 상세 */
export const useGetCommunity = (id: number) => {
  return useQuery(['getCommunity', id], () => {
    return getCommunity(id);
  });
};
