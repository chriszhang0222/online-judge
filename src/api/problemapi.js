import {apiAsync, apiSync} from "@/api/axioscommon";

export const getProblem = (params, callback) =>{
    return apiAsync("get", "/api/v1/problems", params, callback)
}

export const getProblemDetail = (params, callback) => {
    return apiAsync("get", "/api/v1/problems/"+params, {}, callback)
}