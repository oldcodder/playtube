import React from 'react'

const VideoCard = ({ info }) => {

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    // console.log(statistics);

    return (
        <div className='px-4 py-4 w-60 shadow'>
            <img src={thumbnails.medium.url} alt="video" className='rounded'/>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li className='py-1'>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard