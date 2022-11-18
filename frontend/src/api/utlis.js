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

// delete req
export const makeDeleteRequest = async (url) => {
    const { data } = await appAxios.delete(url)
    return data
}
// put 
export const makePutRequest = async (url, body) => {
    const { data } = await appAxios.put(url, body)
    return data
}
