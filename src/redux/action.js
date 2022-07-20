import { COMMENT_CREATE, DECREMENT, INCREMENT, INPUT_TEXT,COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON } from "./typesAction";
const url = 'https://jsonplaceholder.typicode.com/comments?_limit=5'
export function Incrememt(){
    return {
        type: INCREMENT
    }
}

export function Decrement(){
    return {
        type: DECREMENT
    }
}

export function InputText(text){
    return {
        type: INPUT_TEXT,
        text,
    }
}

export function CommentCreate(text, id){
    return {
        type: COMMENT_CREATE,
        data: {text, id}
    }
}

export function CommentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: {text, id}
    }
}

export function CommentDelete( id) {
    return {
        type: COMMENT_DELETE,
        id
    }
}

export function LoaderDisplayOff() {
    return {
        type: LOADER_DISPLAY_OFF,
    }
}

export function LoaderDisplayOn() {
    return {
        type: LOADER_DISPLAY_ON,
    }
}

export function ErrorDisplayOn(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text, 
        })
        setTimeout(() => {
            dispatch(ErrorDisplayOff())
        }, 3000)
    }
}

export function ErrorDisplayOff() {
    return {
        type: ERROR_DISPLAY_OFF,
    }
}


export function CommentsLoad() {
    return async dispatch => {
        try {
            dispatch(LoaderDisplayOn());
            const response = await fetch(url);
            const jsonData =  await response.json();
                dispatch({
                    type: COMMENTS_LOAD,
                    data: jsonData,
                }); 
                dispatch(LoaderDisplayOff());
        } catch(err) {
            dispatch(ErrorDisplayOn('Ошибка запроса'));
            dispatch(LoaderDisplayOff());
        }
    }
}

