import React from 'react'
import { useDispatch } from 'react-redux';
import { SHOW_LOADING } from '../../redux/type/LoadingType';
import { loginURL } from '../../utils/config'
import "./Login.scss"


export default function Login() {
    //const dispatch = useDispatch();

    return (
        <div className="login">
            <img src={require("../../assets/img/logo.png").default} alt="login" />
            <a className="btn" href={loginURL}>Let Starts</a>
        </div>
    )
}
