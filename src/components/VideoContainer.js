import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API } from "../constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json?.items);
      return json;
    } catch (error) {
      // TypeError: Failed to fetch
      console.log("There was an error", error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map(video => (
        <Link to={`watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
