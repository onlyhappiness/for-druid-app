// post SMS 인증요청
interface IPostRequestSMS {
  to: string;
}

// post SMS 인증 검증
interface IPostVerifySMS {
  to: string;
  key: string;
}
