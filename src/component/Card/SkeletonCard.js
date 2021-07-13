import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "./Card.scss"

export default function SkeletonCard() {
    return (
        <div className="card">
            <div className="avartar">
                <Skeleton height={200} />
            </div>
            <div className="content">
                <p className="name">
                    <Skeleton height={20} />
                </p>
            </div>
        </div>
    )
}
