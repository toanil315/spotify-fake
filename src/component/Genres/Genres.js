import React, {memo} from 'react'
import { NavLink } from 'react-router-dom'
import './Genres.scss'

function Genres() {
    return (
        <div className="genres" style={{ marginTop: "4rem" }}>
            <div className="container">
                <div className="title row">
                    <h1>Top Genres</h1>
                </div>
                <div className="content">
                    <div className="item item-1">
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/romance-genre.jpg").default} alt="romance" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=romance`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>Romance</p>
                        <div className="genres-overlay"></div>
                    </div>
                    <div className="item item-2">
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/classical-genre.jpg").default} alt="classical" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=classical`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>classical</p>
                        <div className="genres-overlay"></div>
                    </div>
                    <div className="item item-3">   
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/hip-hop-genre.jpg").default} alt="hip hop" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=hip hop`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>Hip Hop</p>
                        <div className="genres-overlay"></div>
                    </div>
                    <div className="item item-4">
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/rock-genre.jpg").default} alt="romrockance" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=rock`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>Rock</p>
                        <div className="genres-overlay"></div>
                    </div>
                    <div className="item item-5">
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/dance-genre.jpg").default} alt="dance" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=dance`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>Dance</p>
                        <div className="genres-overlay"></div>
                    </div>
                    <div className="item item-6">
                        <div className="card">
                            <div className="avartar">
                                <img src={require("../../assets/img/edm-genre.jpg").default} alt="edm" />
                                <div className="overlay">
                                    <NavLink to={`/search?name=edm`} exact>
                                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <p>Edm</p>
                        <div className="genres-overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Genres);
