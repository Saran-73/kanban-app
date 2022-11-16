import appAxios from "./appAxios"

// get request
export const makeGetRequest = async (url) => {
    const {data} = await appAxios.get(url)
    return data
}
// post req
export const makePostRequest = async (url, body) => {
    const { data } = await  appAxios.post(url, body)
    return data
}

