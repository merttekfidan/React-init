import React from 'react'

const VideoDetail = ({video})=>{
    const videoId = video.id.videoId
    const url = `https://youtube.com/embed/${videoId}`
    return(
        <div className='video-detail col-md-8'>
            <div className='ember-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}/>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}