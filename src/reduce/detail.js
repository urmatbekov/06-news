const initailState = {}

const detail = (state=initailState,action)=>{
    if (action.type === "ADD_DETAIL_NEWS"){
        return action.data
    }
    return state
}

export default detail;