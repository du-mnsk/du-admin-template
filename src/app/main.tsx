import * as ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'

import App from '@/app/App'
import { queryClient } from '@/routes/helper'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)
