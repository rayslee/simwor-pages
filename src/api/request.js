/**
 * 对 axios 进行二次封装
 */

import axios from "axios"

// bookerRequest
export const bookerRequest = axios.create({
    baseURL: "/api/booker",
    timeout: 5000
})
