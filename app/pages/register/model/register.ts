// 아이디 중복 체크
export interface IPostCheckSignname {
  signname: string;
}

// 전화번호 체크
export interface IPostCheckPhone {
  phone: string;
}

// sms 인증 요청
export interface ISMSRequest {
  to: string;
}

// sms 인증 검증
export interface IVerifySMS {
  to: string;
  key: string;
}
