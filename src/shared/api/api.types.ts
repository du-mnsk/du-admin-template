import type { QUERY_NAME } from "@/shared/types/constants"

import type { SelectRequestBodyData } from "./dmrsApi"

export interface ApiRequest<T> {
  Header: {
    CmdType: string | number
    RequestID: string
  }
  Body: T
}

export interface ApiResponse<T> {
  Header: {
    CmdType: string
    ErrCode: number
    ErrMsg: string
  }
  Body: T
}

export interface ErrorMessage {
  message: string
}

export interface DmrsCount {
  cnt: number
}

export interface DmrsYN {
  YN: boolean
}

export interface DmrsRequestParam {
  Header: DmrsRequestHeader
  Body: DmrsRequestBody
}

export interface DmrsRequestHeader {
  CmdType: string //TODO Type
  XMLName: 'ADM'
  RequestID: string
  Query: QUERY_NAME
}

export interface DmrsRequestBody {
  QueryName?: string
  Data: any[]
  Replace?: string
}

export interface DmrsResponse<T> {
  Header: DmrsHeader
  Body: T
}

export interface DmrsCuidResponse {
  Header: DmrsHeader
  Body: DmrsCuidBody
}

export interface DmrsCuidBody {
  LastInsertId: number
  RowsAffected: number
}

export interface DmrsHeader {
  CmdType: string
  ErrCode: number
  ErrMsg: string
  CallApp: string
  Query: string
  RequestID: string
  xmlname: string
}
  

export interface DmrsXlsxRequestParam extends SelectRequestBodyData {
  Fields: XlsxField[]
}

export interface XlsxField {
  Label: string
  Key: string
}

export interface XlsxResponse {
  PNumber: string
  CouponNumber?: string
  UserBankName: string
  UserAccountNumber: string
  Amount: number
  MyAccountContent: string
  UserAccountContent: string
  CmsCode: string
}

