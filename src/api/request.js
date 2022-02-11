/**
 * 对 axios 进行二次封装
 */

import axios from "axios"

// bookerRequest
const bookerRequest = axios.create({
    baseURL: "/api/booker",
    timeout: 5000
})

export const bookerRequest
