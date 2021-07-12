import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTrackDetailAction, getTrackRelatedArtistAction } from '../../redux/action/TrackAction/TrackAction';
import { HIDE_LOADING, SHOW_LOADING } from '../../redux/type/LoadingType';
import "./Detail.scss"

export default function DetailTrack(props) {

    const [track, setTrack] = useState({});
    const [trackRelated, setTrackRelated] = useState([]);
    const { id } = props.match.params;
    const dispatch = useDispatch();

    const getTrackDetail = async (isSubscribed) => {
        if (id) {
            const result = await dispatch(getTrackDetailAction(id));
            setTrack(result);
        }
    }

    const getTrackRelated = async () => {
        if (track.artists) {
            const result = await dispatch(getTrackRelatedArtistAction(track.artists[0].id));
            setTrackRelated(result);
            const hideLoading = setTimeout(() => {
                dispatch({
                    type: HIDE_LOADING
                })
                clearTimeout(hideLoading);
            }, 2000)
        }
    }
    
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch({
            type: SHOW_LOADING
        })
        getTrackDetail();
    }, [id])

    useEffect(() => {
        getTrackRelated();
    }, [track.id])

    const renderTrackRelated = () => {
        return trackRelated.slice(0, 10).map((track, index) => {
            return <div className="related-item row" key={index}>
                <div className="col-1-2">{index + 1}</div>
                <div className="col">
                    <NavLink to={`/track/${track?.id}`} exact>
                        {track?.name}
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
            <div style={{ backgroundImage: `url(${track.album?.images[0].url})` }} className="background"></div>
            <div className="container">
                <div className="detail-content row">
                    <img src={track.album?.images[1].url} alt={track.album?.images[1].url} />
                    <div className="info">
                        <h1>{track.name}</h1>
                        <h2>By: {track.artists?.map((artist, index) => {
                            if (index === track.artists.length - 1) {
                                return <span key={index}>
                                    {artist.name}
                                </span>
                            }
                            return <span key={index}>
                                {artist.name + " -  "}
                            </span>
                        })}</h2>
                        <p>{((track.duration_ms / 1000) / 60).toFixed(2)}'p</p>
                        <p>Released in {track.album?.release_date}</p>
                        <button className="btn">
                            <i className="fa fa-play"></i>
                            Play
                        </button>
                    </div>
                </div>
                <div className="related">
                    <div className="title row">
                        <h1>Related Tracks</h1>
                    </div>
                    <div className="related-list">
                        <div className="related-header row">
                            <div className="col-1-2">#</div>
                            <div className="col">Song Title</div>
                            <div className="col">Artist</div>
                            <div className="col">Duration</div>
                        </div>
                        <div className="related-body">
                            {renderTrackRelated()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
