import React from 'react'
import './Banner.scss'

export default function Banner() {
    return (
        <div className="banner ">
            <div className="container row align-center">
                <img src={require("../../assets/img/banner.png").default} alt="banner" />
                <div className="content">
                    <p>This Month's</p>
                    <p className="primary">Record Breaking Albums !</p>
                    <span>
                        Dream your moments, Until I Met You, Gimme Some Courage, Dark Alley, One More Of A Stranger, Endless
                        <br />
                        Things, The Heartbeat Stops, Walking Promises, Desired Games and many more...
                    </span>
                    <div className="user-ctrl">
                        <a className="btn" href="/">Listen Now</a>
                        <a className="btn" href="/">Add To Queue</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
