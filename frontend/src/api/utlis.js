import { getToken } from "../utils/utlis"
import appAxios from "./appAxios"


// get request
export const makeGetRequest = (url) => {
    return appAxios.get(url,{ headers: { "Authorization": `Bearer ${getToken()}`}})
}
// post req
export const makePostRequest = (url, body) => {
    return appAxios.post(url, body)
}


