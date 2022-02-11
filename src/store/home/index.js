import {reqQueryBooksByTitle} from '@/api'

export default {
    namespaced: true,
    state: {
        bookList: []
    },
    actions: {
        async queryBooksByTitle(context, title) {
            let result = await reqQueryBooksByTitle(title)
            console.log(result)
            if(result.code == 200)
                context.commit('QUERY_BOOKS_BY_TITLE', result.data)
        }
    },
    mutations: {
        QUERY_BOOKS_BY_TITLE(state, bookList) {
            state.bookList = bookList
        }
    },
    getters: {}
}