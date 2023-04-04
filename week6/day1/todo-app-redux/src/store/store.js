import { createStore } from "redux";
import { todoReducer } from "../reducers/reducer"

const store = createStore(
    // todoReducer
    todoReducer
)

export default store;