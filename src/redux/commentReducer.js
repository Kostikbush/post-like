import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD } from "./typesAction";

const initialState = {
    comments: []
}

export const commentReducer = (state=initialState, action) => {
    switch(action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_UPDATE:
            const {data} = action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res => res.id === data.id);
            const newtComments = [
                ...comments.slice(0, itemIndex),
                data, 
                ...comments.slice(itemIndex + 1)
            ];
            return {
                ...state,
                comments: newtComments
                }
        case COMMENT_DELETE:
            return (() => {
                const {id} = action;
                const {comments} = state;
                const itemIndex = comments.findIndex(res => res.id === id);

                const newtComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    comments: newtComments
                    }
                })();
        case COMMENTS_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    text: res.name,
                    id: res.id
                    }
                })
                return {
                    ...state,
                    comments: commentsNew
                    }
                
        default: 
            return state
    }
}