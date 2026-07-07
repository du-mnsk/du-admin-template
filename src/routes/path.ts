const detailPath = (base: string) => (idx: string | number) => `${base}/${idx}`

export const ROUTES = {
  login: '/login',
  logout: '/logout',
  dashboard: '/',
  mypage: '/mypage',

  /** 쿠폰관리 */
  coupons: {
    benefitList: '/coupons/benefits',
    benefitDetail: detailPath('/coupons/benefits'),
  },

  /** 회원관리 */
  member: {
    search: '/member/search',
    refundList: '/member/refund',
    refundDetail: detailPath('/member/refund'),
  },

  /** 운영관리 */
  operate: {
    faqList: '/operate/faq',
    faqDetail: detailPath('/operate/faq'),
    faqRegister: () => '/operate/faq/0',
    popupList: '/operate/popup',
    popupDetail: detailPath('/operate/popup'),
    noticeList: '/operate/notice',
    noticeDetail: detailPath('/operate/notice'),
    termsJoinList: '/operate/terms/join',
    termsJoinDetail: detailPath('/operate/terms/join'),
    termsServiceList: '/operate/terms/service',
    termsServiceDetail: detailPath('/operate/terms/service'),
  },

  /** 고객센터 */
  cs: {
    qnaList: '/cs/qna',
    qnaDetail: detailPath('/cs/qna'),
    customerMsgList: '/cs/customer_msg',
    customerMsgDetail: detailPath('/cs/customer_msg'),
    joinMsgList: '/cs/join_msg',
    joinMsgDetail: detailPath('/cs/join_msg'),
    boilerplateList: '/cs/boilerplate',
    boilerplateDetail: detailPath('/cs/boilerplate'),
  },

  /** 통계 */
  statistic: {
    telecom: '/statistic/telecom',
    realtime: '/statistic/realtime',
    hourly: '/statistic/hourly',
    daily: '/statistic/daily',
    monthly: '/statistic/monthly',
    sales: '/statistic/sales',
    customerUsage: '/statistic/customerUsage',
  },

  /** 서비스 콘텐츠 */
  service: {
    contentsList: '/service/contents',
    contentsDetail: detailPath('/service/contents'),
    contentsForm: detailPath('/service/contents/edit'),
    contentsPreview: detailPath('/popup/service/contents/preview'),
    contentsMessage: (contentIdx: string | number, messageIdx: string | number = 0) =>
      `/service/contents/message/${contentIdx}/${messageIdx}`,
    contentMsgList: '/service/content_msg',
    contentMsgDetail: detailPath('/service/content_msg'),
    contentMsgPreview: detailPath('/service/content_msg/preview'),
  },

  /** 정산 */
  calculate: {
    telecom: '/calculate/telecom',
    partner: '/calculate/partner',
    profit: '/calculate/profit',
  },

  /** 제휴사 관리 */
  partners: {
    channelList: '/partners/channel',
    channelDetail: detailPath('/partners/channel'),
    imageList: '/partners/image',
    imageDetail: detailPath('/partners/image'),
    uitypeList: '/partners/uitype',
    uitypeDetail: detailPath('/partners/uitype'),
    eventList: '/partners/event',
    eventDetail: detailPath('/partners/event'),
  },

  /** 시스템관리 */
  system: {
    accountsList: '/system/accounts',
    accountsDetail: detailPath('/system/accounts'),
  },

  /** 팝업 */
  popup: {
    contentMsgPreview: detailPath('/popup/content_msg/preview'),
    couponUse: (
      issueType: string | number,
      issueMemberIdx: string | number,
      couponOrderId: string | number,
    ) => `/popup/member/search/coupon/${issueType}/${issueMemberIdx}/${couponOrderId}`,
  },
} as const

/**
 * 사용 예시
 *
 * navigate(ROUTES.operate.faqDetail(Idxx))  // 상세
 * navigate(ROUTES.operate.faqDetail(0))  // 신규
 * navigate(ROUTES.operate.faqList)  // 목록
 */
