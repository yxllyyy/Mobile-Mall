import hyRequest, {IResultData} from './index'
export type IHomeInfoType = "oppo" | "onePlus" | "intelligent"
import { IHomeState } from '~~/store/home'

export const getHomeInfo = (type: IHomeInfoType) => {
  return hyRequest.get<IResultData<IHomeState>>("/home/info", {
   type: type || "oppo" 
  })
} 