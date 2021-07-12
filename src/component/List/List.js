import React, {memo} from 'react'
import Card from '../Card/Card'
import './List.scss'

function List(props) {
    const {list, title, type} = props;

    const renderList = () => {
        return list?.map((item, index) => {
            return <div key={index}>
                <Card card={item} type={type} />
            </div>
        })
    }

    return (
        <div className="list">
            <div className="container">
                <div className="title row">
                    <h1>{title}</h1>
                    <a href="/">View More</a>
                </div>
                <div className="row" style={{justifyContent: 'space-between', flexFlow: "row wrap"}}>
                    {renderList()}
                </div>
            </div>
        </div>
    )
}

export default memo(List)
