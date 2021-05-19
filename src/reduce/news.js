const initialState = {
    results:[],
}

const news = (state=initialState,action) => {
    if (action.type === "ADD_NEWS"){
        return action.news
    }
    return state
}

export default news;