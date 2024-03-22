import api from "..";

// 게시글 리스트 조회
export const getBoardList = async ({ cursor, limit }: IPagination) => {
  const { data } = await api.get(`/board`, { params: { cursor, limit } });
  return data.data;
};

// 게시글 생성
export const postBoard = async (body: IPostBoard) => {
  const { data } = await api.post(`/board`, body);
  return data;
};

// 게시글 상세 조회
export const getBoardDetail = async (boardId: number) => {
  const { data } = await api.get(`/board/${boardId}`);
  return data.data;
};

// 게시글 수정
export const putBoard = async (boardId: number) => {
  const { data } = await api.put(`/board/${boardId}`);
  return data;
};

// 게시글 삭제
export const deleteBoard = async (boardId: number) => {
  const { data } = await api.delete(`/board/${boardId}`);
  return data;
};

// 게시글 좋아요
export const postBoardLike = async (boardId: number) => {
  const { data } = await api.post(`/board/like/${boardId}`);
  return data;
};

// 댓글 조회
export const getComment = async (boardId: number) => {
  const { data } = await api.get(`/board/comment/${boardId}`);
  return data;
};

// 댓글 달기
export const postComment = async ({
  boardId,
  body,
}: {
  boardId: number;
  body: IPostBoard;
}) => {
  const { data } = await api.post(`/board/comment/${boardId}`, body);
  return data;
};

// 댓글 수정
export const putComment = async ({
  commentId,
  body,
}: {
  commentId: number;
  body: IPostBoard;
}) => {
  const { data } = await api.put(`/board/comment/${commentId}`, body);
  return data;
};

// 댓글 삭제
export const deleteComment = async (commentId: number) => {
  const { data } = await api.delete(`/board/comment/${commentId}`);
  return data;
};
