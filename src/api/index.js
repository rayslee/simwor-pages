/**
 * 对网络请求进行统一管理，提供应用的 API 一致性接口。
 */

import {bookerRequest} from './request'

// 根据书名索引图书信息
export function reqQueryBooksByTitle(title) {
    return bookerRequest({
        method: 'get',
        url: `/query-books-by-title?title=${title}`
    })
}