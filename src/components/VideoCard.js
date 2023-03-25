import React from "react";
import { dateformater, viewersCount } from "../utils/Helpers";

const VideoCard = ({ info }) => {
  if (!info) return null;
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title, publishedAt } = snippet;
  const todate = new Date();
  const videodate = new Date(publishedAt);

  return (
    <div className="h-72 w-60 py-2 m-2 relative ">
      <div className="p-2 m-5  min-h-full  min-w-full shadow-lg cursor-pointer opacity-9 hover:opacity-20 hover:transition-all">
        <img
          className="rounded-lg object-cover"
          src={thumbnails.medium.url}
          alt=""
        />
        <h2 className="font-bold text-xs py-2">{title}</h2>
        <div className="flex flex-row p-1">
          <h2 className="font-medium text-gray-400 text-sm">{channelTitle}</h2>
          <span className="p-1 mt-[1px]">
            <img
              className="w-3 "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Eo_circle_grey_checkmark.svg/2048px-Eo_circle_grey_checkmark.svg.png"
              alt="hello"
            />
          </span>
        </div>
        <div className="flex flex-row ">
          <h6 className=" absolute  left-7 bottom-0 ">
            {viewersCount(statistics?.viewCount)}
            <span> &#8226;</span>
          </h6>
          <span className="font-medium text-sm absolute right-11 bottom-0 ">
            {dateformater(todate, videodate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
