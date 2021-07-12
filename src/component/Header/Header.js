import React, { useEffect, useRef, useState, memo } from 'react'
import './Header.scss';
import '../../assets/style/global.scss'
import { TOKEN } from '../../utils/config';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoAction } from '../../redux/action/UserAction/UserAction';
import { NavLink } from 'react-router-dom';
import { searchTrackAction } from '../../redux/action/TrackAction/TrackAction';

function Header() {
    const { userInfo } = useSelector(state => state.UserReducer);
    const [searchInp, setSearchInp] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [outPutClass, setOutPutClass] = useState("");
    const searchRef = useRef(null);
    

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem(TOKEN)) {
            dispatch(getInfoAction());
        }
    }, []);

    const handleChange = async (event) => {
        setSearchInp(event.target.value);
        if (searchRef.current) {
            clearTimeout(searchRef.current);
        }
        if(event.target.value.length > 0) {
            searchRef.current = setTimeout(async () => {
                const result = await dispatch(searchTrackAction(event.target.value, 10));
                setSearchResult(result.tracks.items);
            }, 400)
        }
        else {
            setSearchResult([]);
        }

    }

    const renderSearchResult = () => {
        if(searchResult.length > 0) {
            return searchResult.map((track, index) => {
                return <li key={index}>
                    <NavLink to={`/track/${track.id}`} exact className="item">
                        {track.name} {track.artists.map((artist, index) => {
                            if(index != 0) {
                                return;
                            }
                            return <span key={index}> - {artist.name}</span>;
                        })}
                    </NavLink>
                </li>
            })
        }
        return <img className="no-item" src={require("../../assets/img/no_item.png").default} alt="no-item" />
    }

    return (
        <div className="header">
            <div className="container row align-center">
                <NavLink to="/" exact className="logo">
                    <img src={require("../../assets/img/logo.png").default} alt="logo" />
                </NavLink>    
                <div className="search-input">
                    <input onFocus={() => {
                        setOutPutClass("show");
                    }} onBlur={() => {
                        setOutPutClass("");
                    }} onChange={(event) => {
                        handleChange(event)
                    }} value={searchInp} autoComplete="off" placeholder="Search Music Here..." />
                    <NavLink to={`/search?name=${searchInp}`} exact className="search-btn btn"><i className="fa fa-search"></i></NavLink>
                    <div className={`search-output ${outPutClass}`}>
                        <ul className="result">
                            {renderSearchResult()}
                        </ul>
                    </div>
                </div>
                <div className="user-ctrl row align-center">
                    <span className="row align-center">Language <img src={require("../../assets/img/lang.svg").default} alt="language" /></span>
                    {
                        userInfo ? <img src={userInfo?.images[0].url} className="avartar" alt="ava" /> : <div>
                            <button className="btn">Register</button>
                            <NavLink to="/login" exact className="btn">Login</NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Header);
