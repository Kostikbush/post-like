import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { InputText } from './../redux/action';


function Title() {
    const dispatch = useDispatch()
    const text = useSelector(state => {
        const {inputReducer} = state;

        return inputReducer.text;
    })
    const handleChange = (e) => {
        dispatch(InputText(e.target.value))
    }
    
    return (
        <div className="card-title">
            <div className="card-title-top">
                <input type='text' onChange={handleChange}/>
            </div>
        </div>
    )
}


export default Title;
