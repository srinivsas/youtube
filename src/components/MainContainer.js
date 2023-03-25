import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const buttonList = [
    "All",
    "Music",
    "News",
    "Tamil Cinema",
    "Mixes",
    "Comedy",
    "Computer Programing",
    "Coocking Show",
    "sports",
    "Live",
    "Hotels",
    "BestPlaces",
    "Torisum",
    "Batminton",
  ];

  return (
    <div className="p-2 m-2">
      <div className="flex p-2 m-2">
        {buttonList.map((name, i) => (
          <ButtonList key={i} name={name} />
        ))}
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
