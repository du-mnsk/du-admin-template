# useAuthCheck
 - 공통 어드민 Auth/권한 가드 훅 
 ## 정책(기본):  
  - 세션 만료/미로그인: localStorage.clear() 후 loginPath로 이동 
  - 권한 없음: forbiddenPath로 이동 

 ## 사용: 
  - 프로젝트에서 authMap을 만들어 주입해서 사용한다. 
  - 예시는 authMap.example.ts / 노션 https://www.notion.so/datau/useAuthCheck-2e3fdd70e86c8184a0e7fcde188b3ee0 참고

## 주의사항
  - localStorage.clear() 정책이므로 auth 외 데이터가 있다면 구조 분리 필요
  - URL 구조가 /popup/{menu} 형태인 경우도 자동 대응됨
  - alert UI는 공통 어드민 정책에 따라 유지


