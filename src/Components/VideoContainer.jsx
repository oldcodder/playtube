import React, { useEffect } from 'react'
import { YOUTUBE_API_URL } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router';

const VideoContainer = () => {
  const [videos, setvideos] = React.useState([]);

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setvideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => (
          <Link key={video.id} className='inline-flex' to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
          
        ))
      }
    </div>
  )
}

export default VideoContainer