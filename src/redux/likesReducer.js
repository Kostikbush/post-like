import { INCREMENT, DECREMENT } from "./typesAction";


const initialState = {
    like: false,
    disLike: false
}
export const likesReducer = (state=initialState, action) => {
    switch(action.type){
            case INCREMENT:
                return {
                    ...state,
                    like: !state.like,
                }
            case DECREMENT: 
                return {
                    ...state,
                    disLike: !state.disLike,
                }
            default:
                return state
        }
}