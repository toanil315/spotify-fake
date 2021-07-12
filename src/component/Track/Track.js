import React from 'react'
import { NavLink } from 'react-router-dom';
import './Track.scss'

export default function Track(props) {
    const { track, index } = props;
    return (
        <div className="track row align-center">
            <p className="index">{(index + 1) < 10 ? "0" + (index + 1) : (index + 1)}</p>
            <div className="content row">
                <div className="track-img">
                    <img src={track.album?.images[2].url} alt="img" />
                    <div className="overlay">
                        <img className="play-btn" src={require("../../assets/img/play.svg").default} alt="play" />
                    </div>
                </div>
                <div className="track-info">
                    <NavLink to={`/track/${track.id}`} className="track-name">{track.name}</NavLink>
                    <span>
                        {
                            track.artists.map((artist, index) => {
                                if(index === track.artists.length - 1) {
                                    return artist.name;
                                }
                                return artist.name + " - ";
                            })
                        }
                    </span>
                </div>
            </div>
            <p className="duration">{((track.duration_ms / 1000)/60).toFixed(2)}</p>
        </div>
    )
}
