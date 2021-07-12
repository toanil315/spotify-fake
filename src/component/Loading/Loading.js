import React from 'react'
import { useSelector } from 'react-redux'
import "./Loading.scss";

export default function Loading(props) {
    const {show} = useSelector(state => state.LoadingReducer);
    return (
        <div className={`loading ${!show ? "hide" : ""}`} >
            <img src={require("../../assets/img/loader.gif").default} alt="loading" />
        </div>
    )
}
