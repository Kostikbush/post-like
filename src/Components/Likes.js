import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Incrememt, Decrement } from '../redux/action';

function Likes(props) {
    const dispatch = useDispatch();
    const likes = useSelector(state => {
        const {likesReducer} = state;

        return likesReducer.like;
    })
    const disLikes = useSelector(state => {
        const {likesReducer} = state;

        return likesReducer.disLike;
    })

    const onIncrementLikes = () => {
        dispatch(Incrememt())
        if(disLikes) {
            dispatch(Decrement())
        }
    };
    const onDecrementLikes = () => {
        dispatch(Decrement())
        if(likes) {
            dispatch(Incrememt())
        }
    }
    return (
        <div className="button-controls">
            <button className={`${likes ? 'like-active' : 'like'}`} onClick={() => onIncrementLikes()}><span>🖒</span> {likes}</button>
            <button className={`${disLikes ? 'like-active' : 'like'}`} onClick={() => onDecrementLikes()}><span>🖓</span> </button>
        </div>
    )
}


export default Likes;