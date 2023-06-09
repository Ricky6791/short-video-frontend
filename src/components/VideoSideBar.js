import React, {useState} from 'react'
import './VideoSideBar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

const VideoSideBar = ({likes, shares, messages}) => {
    const[liked, setLiked] = useState(false)
    return (
        <div className="videoSideBar">
            <div className="videoSideBar__button">
                {liked ? <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} /> : <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />}
                <p>{liked ? +likes + 1 : likes}</p>
            </div>
            <div className="videoSideBar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSideBar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
    
}

export default VideoSideBar