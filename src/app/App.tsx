import { ConfigProvider } from 'antd'
import koKr from 'antd/lib/locale/ko_KR'
import dayjs from 'dayjs'

import { AppRouter } from '@/routes/AppRouter'
import { GlobalStyle } from '@/styles/GlobalStyle'

dayjs().locale('ko_KR')

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ConfigProvider locale={koKr}>
        <AppRouter />
      </ConfigProvider>
    </>
  )
}

export default App
