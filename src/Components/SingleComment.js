import React from "react";
import { useEffect, useState } from "react";
import { CommentDelete, CommentUpdate } from "../redux/action";
import { useDispatch } from "react-redux";


export default function SingleComment({data}){
    const [commentText, setCommentText] = useState('')
    const {text, id} = data;
    const dispatch = useDispatch()
    const handleHeight = (e) => {
        if (e.target.scrollHeight < e.target.clientWidth) {
            e.target.style.height = e.target.scrollHeight + 'px';
        }if (e.target.scrollHeight > e.target.clientWidth) {
            e.target.style.height = e.target.scrollHeight - 'px';
        }
    }
    
    
    useEffect(()=> {
        if(text){
            setCommentText(text)
        }
    },[text])
    const handleInput = (e) => {
        setCommentText(e.target.value);
    }
    const handleChenge = (e) => {

        e.preventDefault();
        dispatch(CommentUpdate(commentText, id))
    }   
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(CommentDelete(id))
    }

    return (
            <form onSubmit={handleChenge} className="comments-item">
                <div onClick={handleDelete} className="comments-item-delete">&times;</div>
                <textarea onInput={handleHeight} className="input" type='text' onChange={handleInput} value={commentText}/>
                <input type='submit' hidden/>
            </form>
    )
}