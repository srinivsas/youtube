import React from "react";
import {
  MdOutlineHome,
  MdOutlineAppShortcut,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdVideoSettings,
  MdOutlineMovie,
  MdAccessTime,
} from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isToggle = useSelector(state => state.sideBar.isMenuOpen);

  return (
    <div className={!isToggle ? `py-1 ` : `p-1 flex flex-col h-3/4`}>
      <Link to="/">
        <div
          className={
            !isToggle
              ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1 `
              : `w-16 hover:shadow hover:bg-slate-200 p-2`
          }
        >
          <span className={!isToggle ? `px-2` : `" "`}>
            <MdOutlineHome size={30} />
          </span>
          <span
            className={
              !isToggle
                ? `text-sm active:font-bold font-normal`
                : `text-[0.6rem]`
            }
          >
            Home
          </span>
        </div>
      </Link>
      <div
        className={
          !isToggle
            ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
            : `w-16 hover:shadow hover:bg-slate-200 p-2`
        }
      >
        <span className={!isToggle ? `px-2` : `" "`}>
          <MdOutlineAppShortcut size={30} />
        </span>
        <span
          className={
            !isToggle ? `text-sm active:font-bold font-normal` : `text-[0.6rem]`
          }
        >
          Shorts
        </span>
      </div>
      <div
        className={
          !isToggle
            ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
            : `w-16 hover:shadow hover:bg-slate-200 p-2`
        }
      >
        <span className={!isToggle ? `px-2` : `" "`}>
          <MdOutlineSubscriptions size={30} />
        </span>
        <span
          className={
            !isToggle ? `text-sm active:font-bold font-normal` : `text-[0.6rem]`
          }
        >
          Subscriptions
        </span>
      </div>
      {!isToggle && <hr className={!isToggle ? `shadow-sm mb-1` : `hidden`} />}
      <div
        className={
          !isToggle
            ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
            : `w-16 hover:shadow hover:bg-slate-200 p-2`
        }
      >
        <span className={!isToggle ? `px-2` : `" "`}>
          <MdOutlineVideoLibrary size={30} />
        </span>
        <span
          className={
            !isToggle ? `text-sm active:font-bold font-normal` : `text-[0.6rem]`
          }
        >
          Library
        </span>
      </div>
      {!isToggle && (
        <>
          <div
            className={
              !isToggle
                ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
                : `w-16 hover:shadow hover:bg-slate-200 p-2`
            }
          >
            <span className={!isToggle ? `px-2` : `" "`}>
              <MdOutlineHistory size={30} />
            </span>
            <span
              className={
                !isToggle
                  ? `text-sm active:font-bold font-normal`
                  : `text-[0.6rem]`
              }
            >
              History
            </span>
          </div>
          <div
            className={
              !isToggle
                ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
                : `w-16 hover:shadow hover:bg-slate-200 p-2`
            }
          >
            <span className={!isToggle ? `px-2` : `" "`}>
              <MdVideoSettings size={30} />
            </span>
            <span
              className={
                !isToggle
                  ? `text-sm active:font-bold font-normal`
                  : `text-[0.6rem]`
              }
            >
              Your Videos
            </span>
          </div>
          <div
            className={
              !isToggle
                ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
                : `w-16 hover:shadow hover:bg-slate-200 p-2`
            }
          >
            <span className={!isToggle ? `px-2` : `" "`}>
              <MdOutlineMovie size={30} />
            </span>
            <span
              className={
                !isToggle
                  ? `text-sm active:font-bold font-normal`
                  : `text-[0.6rem]`
              }
            >
              Your Movies
            </span>
          </div>
          <div
            className={
              !isToggle
                ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
                : `w-16 hover:shadow hover:bg-slate-200 p-2`
            }
          >
            <span className={!isToggle ? `px-2` : `" "`}>
              <MdAccessTime size={30} />
            </span>
            <span
              className={
                !isToggle
                  ? `text-sm active:font-bold font-normal`
                  : `text-[0.6rem]`
              }
            >
              Watch Later
            </span>
          </div>
          <div
            className={
              !isToggle
                ? `flex flex-row mt-2 items-center w-36 h-10 hover:bg-gray-200 hover:rounded-lg p-1`
                : `w-16 hover:shadow hover:bg-slate-200 p-2`
            }
          >
            <span className={!isToggle ? `px-2` : `" "`}>
              <BiLike size={30} />
            </span>
            <span
              className={
                !isToggle
                  ? `text-sm active:font-bold font-normal`
                  : `text-[0.6rem]`
              }
            >
              Liked Videos
            </span>
          </div>

          <hr />
        </>
      )}
    </div>
  );
};

export default SideBar;
