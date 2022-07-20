import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import uniqid from 'uniqid'
import { CommentCreate, CommentsLoad,  } from "../redux/action";
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function Comments(props){
    const [textComment, setTextComment] = useState('')
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const {commentReducer} = state;
        return commentReducer.comments;
    })
    const handleInput = (e) => {
        setTextComment(e.target.value)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        if(textComment.length){
            dispatch(CommentCreate(textComment, id));
        }
        setTextComment('')
    }
    useEffect(() => {
        dispatch(CommentsLoad());
    },[]);
    return (
        <TransitionGroup className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>
                <button className="button">ADD COMMENT</button>
            </form>
            {!!comments.length && comments.map(res => {
               return (
                <CSSTransition
                    timeout={1000}
                  classNames={'note'}
                  key={res.id}
                                >
                    <SingleComment  data={res} />
                </CSSTransition>
                )
            })}  
        </TransitionGroup>
    )
}