
//TODO: 파일 생성 후 삭제 예정
export interface AuthInfo {
    Type: DomainType
    UserID: string
    UserName: string
    GroupName: string
    AuthType: string
    PCodeList?: string
  }
  
  export enum DomainType {
    ADMIN = 0,
    TOGETHER = 1,
    COUPONPROVIDER = 2,
  }