import {combineReducers} from "redux"
import news from "./news"
import detail from "./detail"

const reduce = combineReducers({
    news,
    detail
})

export default reduce;