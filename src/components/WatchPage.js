import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SINGLE_YOUTUBE_VIDEO } from "../constants";
import { BiLike, BiDislike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { TfiDownload } from "react-icons/tfi";
import { RxDotsHorizontal } from "react-icons/rx";
import { dateformater, viewersCount } from "../utils/Helpers";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [video, setVideo] = useState({});
  const { snippet, statistics } = video;
  //   const { title, publishedAt, localized, thumbnails } = snippet;
  console.log(video);
  const value = searchParams.get("v");

  useEffect(() => {
    getSingleVideoData();
  }, []);
  const todate = new Date();
  const videodate = new Date(snippet?.publishedAt);
  const getSingleVideoData = async () => {
    try {
      const data = await fetch(`${SINGLE_YOUTUBE_VIDEO}${value}`);
      const json = await data.json();
      setVideo(json?.items[0]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex">
      <div className="ml-3 p-2 w-[920px]">
        <div className="">
          <iframe
            width="900"
            height="400"
            src={`https://www.youtube.com/embed/${value}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            allowTransparency="true"
          ></iframe>
        </div>
        <div className="m-1 p-1">
          <div className="font-bold">{snippet?.title}</div>
          <div className="flex justify-between">
            <div className="mt-2 flex">
              <img
                className="w-8 h-8 rounded-full cursor-pointer "
                src={snippet?.thumbnails?.default?.url}
                alt=""
              />
              <div className="flex ml-3">
                <div className="flex flex-col mx-2">
                  <p className="font-bold">{snippet?.channelTitle}</p>
                  <span className="text-gray-900">
                    {viewersCount(statistics?.viewCount)} SubScribers
                  </span>
                </div>
                <div className="mt-2 ml-6">
                  <button className=" text-xs text-white bg-black rounded-full px-4 py-2 items-center hover:opacity-90">
                    SubScribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-2 flex px-2">
              <span className="px-2 py-1 rounded-full mx-2  bg-gray-200 mt-2 flex cursor-pointer hover:opacity-70 ">
                <BiLike fontSize={25} />
                {viewersCount(statistics?.likeCount)}
              </span>
              <span className="px-2 py-1 rounded-full mx-2  bg-gray-200 mt-2 flex cursor-pointer hover:opacity-70 ">
                <BiDislike fontSize={25} />
              </span>
              <span className="px-2 py-1 rounded-full mx-2  bg-gray-200 mt-2 flex cursor-pointer hover:opacity-70 ">
                <TbShare3 fontSize={25} />
                Share
              </span>
              <span className="px-2 py-1 rounded-full mx-2  bg-gray-200 mt-2 flex cursor-pointer hover:opacity-70 ">
                <TfiDownload fontSize={25} />
                Download
              </span>
              <span className="px-2 py-1 rounded-full mx-2  bg-gray-200 mt-2 flex cursor-pointer hover:opacity-70 ">
                <RxDotsHorizontal fontSize={25} />
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-slate-100 p-1">
          <div>
            <div className="px-2  mt-4">
              <div>
                <span className="font-semibold">
                  {viewersCount(statistics?.viewCount)}views
                </span>
                <span className=" font-semibold ml-1">
                  {dateformater(todate, videodate)}
                </span>
                <div>{snippet?.title}</div>
              </div>
            </div>
            <div className="flex ml-2 mt-10 ">
              {snippet?.description.length >= 100
                ? `${snippet?.description?.substring(0, 75)}`
                : snippet?.description}
              <span className="px-2 font-bold cursor-pointer">Show More</span>
            </div>
          </div>
        </div>
        <div className="p-2">{statistics?.commentCount} Comments</div>
      </div>
      <div></div>
    </div>
  );
};

export default WatchPage;
