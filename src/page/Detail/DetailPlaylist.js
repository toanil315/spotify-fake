import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPlayListDetailAction } from '../../redux/action/TrackAction/TrackAction';
import { HIDE_LOADING, SHOW_LOADING } from '../../redux/type/LoadingType';
import "./Detail.scss"  

export default function DetailPlaylist(props) {
    const [playList, setPlayList] = useState({});
    const { id } = props.match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        const getPlayListDetail = async () => {
            const result = await dispatch(getPlayListDetailAction(id));
            setPlayList(result);
            console.log(result);
        }

        dispatch({
            type: SHOW_LOADING
        })
        setTimeout(() => {
            dispatch({
                type: HIDE_LOADING
            })
        }, 2000);
        window.scrollTo(0,0)
        getPlayListDetail();
    }, [])

    const renderTracks = () => {
        return playList.tracks?.items.slice(0, 10).map((item, index) => {
            let {track} = item;
            return <div className="related-item row" key={index}>
                <div className="col-1-2">{index + 1}</div>
                <div className="col">
                    <NavLink to={`/track/${track.id}`} exact>
                        {track.name}
                    </NavLink>
                </div>
                <div className="col">{track?.artists.map((artist, index) => {
                    if (index === track?.artists.length - 1) {
                        return <span key={index}>
                            {artist.name}
                        </span>
                    }
                    return <span key={index}>
                        {artist.name} -
                    </span>
                })}</div>
                <div className="col">{((track.duration_ms / 1000) / 60).toFixed(2)}</div>
                <button className="btn"><i className="fa fa-play"></i></button>
            </div>
        }) 
    }

    return (
        <div className="detail">
            <div style={{ backgroundImage: `url(${playList.images?.[0].url})` }} className="background"></div>
            <div className="container">
                <div className="detail-content row">
                    <img src={playList.images?.[0].url} alt={playList.images?.[0].url} />
                    <div className="info">
                        <h1>{playList.name}</h1>
                        <h2>Follower: {playList.followers?.total}</h2>
                        <button className="btn">
                            <i className="fa fa-play"></i>
                            Play
                        </button>
                    </div>
                </div>
                <div className="related">
                    <div className="title row">
                        <h1>Tracks</h1>
                    </div>
                    <div className="related-list">
                        <div className="related-header row">
                            <div className="col-1-2">#</div>
                            <div className="col">Song Title</div>
                            <div className="col">Artist</div>
                            <div className="col">Duration</div>
                        </div>
                        <div className="related-body">
                            {renderTracks()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
