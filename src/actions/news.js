const addNews = (news) => {
    return {
        type:"ADD_NEWS",
        news
    }
}

const addNewsDetail = (detail) => {
    return {
        type:"ADD_NEWS_DETAIL",
        detail
    }
}

export {addNews,addNewsDetail};