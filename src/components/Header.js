import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/AppSlice";
import { YOUTUBE_SEARCH_API } from "../constants";
import { TfiSearch } from "react-icons/tfi";
import { HiMicrophone } from "react-icons/hi";
import { catchResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesions, setSuggesions] = useState([]);
  const [showSuggesions, setShowSuggesions] = useState(false);

  const dispatch = useDispatch();
  const toggleSideBar = () => dispatch(toggle());

  const searchitems = useSelector(state => state.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchitems[searchQuery]) {
        setSuggesions(searchitems[searchQuery]);
      } else {
        searchSugessions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);
  const searchSugessions = async () => {
    try {
      const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      const json = await data.json();
      setSuggesions(json[1]);
      dispatch(
        catchResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  //TODO

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg  sticky top-0 bg-white z-[100]  ">
      <div className="flex col-span-1 justify-start">
        <img
          onClick={() => toggleSideBar()}
          className="cursor-pointer h-6 mr-2"
          src="https://w7.pngwing.com/pngs/267/362/png-transparent-computer-icons-encapsulated-postscript-others-miscellaneous-button-icon-burger-menu.png"
          alt="menu items"
        />
        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="Logo"
        />
      </div>

      <div className=" grid grid-cols-1  place-content-stretch col-4 ">
        <div className="flex">
          <input
            className="border h-8 border-gray-400 w-3/4 rounded-l-full outline-none px-4 text-sm"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggesions(true)}
            onBlur={() => setShowSuggesions(false)}
          />
          <button className="px-3 h-8 bg-gray-300 rounded-r-full ">🔍</button>
          <span className="p-1 hover:bg-slate-400 hover:rounded-full hover:cursor-pointer">
            <HiMicrophone size={25} />
          </span>
        </div>
        {showSuggesions && (
          <div>
            <ul className="fixed bg-white px-2  rounded-lg  w-[27.5rem] z-[100] shadow-lg">
              {suggesions &&
                suggesions.map(s => (
                  <li key={s} className="hover:bg-slate-100 flex ">
                    <span className="mr-2 p-1 mt-1">
                      <TfiSearch fontSize={12} />
                    </span>
                    {s}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <img
          className="h-5 mr-5"
          src="https://cdn-icons-png.flaticon.com/512/4110/4110178.png"
          alt="bell"
        />
        <img
          className="h-6"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="useid"
        />
      </div>
    </div>
  );
};

export default Header;
