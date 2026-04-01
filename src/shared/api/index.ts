import { createDmrsApi } from './dmrsApi'
export const dmrsApi = createDmrsApi({
  autoNotifyError: true
})

export {
  createDmrsApi,
  type DmrsApiConfig,
  type ExecuteRequestBodyData,
  type ListApiRequest,
  type SelectRequestBodyData,
} from './dmrsApi'
