import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Card from '../../component/Card/Card';
import SkeletonCard from '../../component/Card/SkeletonCard';
import { searchTrackAction } from '../../redux/action/TrackAction/TrackAction';
import { HIDE_LOADING, SHOW_LOADING } from '../../redux/type/LoadingType';
import "./Search.scss";

export default function Search(props) {

    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const search = props.location.search;
    const queries = new URLSearchParams(search);
    const resultQuery = queries.get("name");

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({
            type: SHOW_LOADING
        })
        setTimeout(() => {
            dispatch({
                type: HIDE_LOADING
            })
        }, 2000)
        const getSearchResult = async () => {
            const data = await dispatch(searchTrackAction(resultQuery, 20));
            setSearchResult(data.tracks.items);
        }

        getSearchResult();
    }, [resultQuery])

    const renderResult = () => {
        if (searchResult.length === 0) {
            return <img className="no-item" src={require("../../assets/img/no_item.png").default} alt="no item" />
        }
        return searchResult.map((track, index) => {
            return <div className="search-item" key={index}>
                <Card type="track" card={{ ...track, images: [...track.album.images] }} />
            </div>
        })
    }

    const loadMore = async () => {
        setLoading(true);
        const data = await dispatch(searchTrackAction(resultQuery, 12, searchResult.length));
        setTimeout(() => {
            setSearchResult([...searchResult, ...data.tracks.items]);
            setLoading(false);
        }, 1000)
    }

    return (
        <div className="search">
            <div className="container ">
                <h2>Result of "{resultQuery}":</h2>
                <div className="row search-content">
                    {renderResult()}
                    {
                        isLoading
                            ? [...new Array(12)].map((skelenton, index) => {
                                return <div className="search-item" key={index}>
                                    <SkeletonCard />
                                </div>
                            })
                            : ""
                    }
                </div>
                <button onClick={() => {
                    loadMore()
                }} className="btn">
                    Load More
                </button>
            </div>
        </div>
    )
}
