import React, {memo} from 'react'
import { NavLink } from 'react-router-dom';
import "./Card.scss"

function Card(props) {
    const {card, type} = props;

    return (
        <div className="card">
            <div className="avartar">
                <img src={card?.images[0].url} alt={card?.images[0].url}/>
                <div className="overlay">
                    <NavLink to={`/${type}/${card?.id}`} exact>
                        <img src={require("../../assets/img/play.svg").default} alt="play" />
                    </NavLink>
                </div>
            </div>
            <div className="content">
                <NavLink to={`/${type}/${card?.id}`} exact className="name">{card?.name}</NavLink>
            </div>
        </div>
    )
}

export default memo(Card);
