export enum QUERY_NAME {  
    EXAMPLE_QUERY = 'ExampleQuery',
    EXAMPLE_QUERY_2 = 'ExampleQuery2',
    EXAMPLE_QUERY_3 = 'ExampleQuery3',
    EXAMPLE_QUERY_4 = 'ExampleQuery4',
    EXAMPLE_QUERY_5 = 'ExampleQuery5',
    // usePcodeOptions Example
    SELECT_PARTNER_SELECTION_LIST = 'SelectPartnerSelectionList',
    // Notice
    SELECT_NOTICE_LIST = 'SelectNoticeList',
    SELECT_NOTICE_COUNT = 'SelectNoticeCount',
    SELECT_NOTICE_DETAIL = 'SelectNoticeDetail',
    INSERT_NOTICE = 'InsertNotice',
    UPDATE_NOTICE = 'UpdateNotice',
    DELETE_NOTICE = 'DeleteNotice',
    // Coupon
    SELECT_COUPON_FREE_LIST = 'SelectCouponFreeList',
    SELECT_COUPON_FREE_COUNT = 'SelectCouponFreeCount',
    SELECT_COUPON_DETAIL = 'SelectCouponDetail',
    INSERT_FREE_COUPON = 'InsertFreeCoupon',
    UPDATE_FREE_COUPON = 'UpdateFreeCoupon',
    DELETE_FREE_COUPON = 'DeleteFreeCoupon',
  }
  
  export enum CMD_TYPE {
    CHECK_SESSION = 900,
    LOGIN = 1000,
    LOGIN_VERIFY = 1003,
    PW_UPDATE = 1004,
    LOGOUT = 1001,
    STATE_JOIN = 1020,
    LOOKUP_TELECOM = 1021,
    ENFORCE_CANCEL = 1022,
    REQUEST_CERT_NUMBER = 1023,
    CERTIFY_CANCEL = 1024,
    REQUEST_ADMIN_APPROVAL = 1025,
    VERIFY_ADMIN_APPROVAL = 1026,
    REQUEST_SEND_SMS = 1040,  
    UPLOAD_IMAGE_REPLACE = 2000,
    DMRS_BYPASS = 1010,
    SELECT = 'DBMW_00010',
    CUID = 'DBMW_00020',
    SELECT_REPLACE = 'DBMW_00050',
  }
  