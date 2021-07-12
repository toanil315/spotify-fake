import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../../component/Banner/Banner'
import Genres from '../../component/Genres/Genres'
import List from '../../component/List/List'
import Track from '../../component/Track/Track'
import { authAction } from '../../redux/action/AuthAction/AuthAction'
import { getFeaturedPlayListsAction, getTopTracksAction } from '../../redux/action/TrackAction/TrackAction'
import { getInfoAction } from '../../redux/action/UserAction/UserAction'
import { HIDE_LOADING, SHOW_LOADING } from '../../redux/type/LoadingType'
import { TOKEN } from '../../utils/config'

export default function Home() {
    const dispatch = useDispatch();   
    const [topTracks, setTopTracks] = useState([]);
    const [featuredPlayList, setPlayList] = useState([]);
    const isSubscribed = useRef(true);

    const authUser = async (isSubscribed) => {
        if(!localStorage.getItem(TOKEN)) {
            await dispatch(authAction());
            await dispatch(getInfoAction());
        }
        const resultTracks = await dispatch(getTopTracksAction());
        const resultPlayList = await dispatch(getFeaturedPlayListsAction(4));
        if(isSubscribed.current) {
            setTopTracks(resultTracks);
            setPlayList(resultPlayList);
        }
    }  

    useEffect(() => {  
        window.scrollTo(0,0)
        dispatch({
            type: SHOW_LOADING
        })
        setTimeout(() => {
            dispatch({
                type: HIDE_LOADING
            })
        }, 2000);
        authUser(isSubscribed);
        return () => (isSubscribed.current = false);
    }, [])

    const renderTopTrack = () => {
        return topTracks?.map((track, index) => {
            return <div key={index}>
                <Track track={track} index={index} />
            </div>
        })
    }

    return (
        <div>
            <Banner />
            <List title="Features Playlist" list={featuredPlayList} type={"playList"} />
            <div className="top-track container" style={{ marginTop: '3rem' }}>
                <div className="title row">
                    <h1>Weekly Top 15</h1>
                </div>
                <div className="">
                    {renderTopTrack()}
                </div>
            </div>
            <Genres />
        </div>
    )
}
