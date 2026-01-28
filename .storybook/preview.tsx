import React from 'react'
import type { Preview } from '@storybook/react-vite'
import { ConfigProvider } from 'antd'
import koKr from 'antd/lib/locale/ko_KR'
import dayjs from 'dayjs'

import { GlobalStyle } from '../src/styles/GlobalStyle'

dayjs.locale('ko')

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <GlobalStyle />
        <ConfigProvider locale={koKr}>
          <Story />
        </ConfigProvider>
      </React.Fragment>
    ),
  ],
}

export default preview
