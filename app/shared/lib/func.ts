export function daysAgo(dateString: string) {
  // 주어진 날짜를 파싱하여 Date 객체 생성
  const givenDate: any = new Date(dateString);

  // 현재 날짜와 시간
  const currentDate: any = new Date();

  // 두 날짜의 차이를 밀리초로 계산
  const diffInMs = currentDate - givenDate;

  // 밀리초를 일로 변환 (1일 = 24시간 * 60분 * 60초 * 1000밀리초)
  const diffInDays = Math.floor(diffInMs / (24 * 60 * 60 * 1000));

  return diffInDays;
}
