import React from 'react'
import './VideoFooter.css'

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@username</h3>
                <p>description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                </div>
            </div>
        </div>
    )
}

export default VideoFooter