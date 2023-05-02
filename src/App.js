import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './components/Video';
import axios from './components/axios';

function App() {
   const [videos, setVideos] = useState([])
   useEffect(() => {
     async function fetchData() {
      try{
       const res = await axios.get('/v2/posts')
       setVideos(res.data)
       return res
     } catch (error){
        console.log(error)
     }
    }
     fetchData()
  }, [])
  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (
          <Video
            key={url}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
