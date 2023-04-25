import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@username</h3>
                <p>description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>I am a windows PC</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    )
}

export default VideoFooter