import React from 'react'
import "./WatchLater.css"
import {useWatchLaterContext} from "../../Context/WatchLaterContext"
import {WatchLaterCard, FixedLoader, Footer} from "../../Component/index"

const  WatchLater = () => {
  
  const {state: {watchLater}} = useWatchLaterContext()
  return (
    <>
    <div className="main-container watchlater-container">
      <header className="main-container-header">
        <h1 className="text-md">Watch Later Video ({watchLater?.length})</h1>
      </header>
      <div className="playlist-wrapper watchlater-video-wrapper">
      { watchLater?.length === 0 ? <FixedLoader message={"There is no Watch Later video. Please add 😊"} /> : watchLater?.map((eachVideo) => (
          <WatchLaterCard key={eachVideo._id} eachVideo={eachVideo} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  )
}

export   {WatchLater}