import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import LiveMessage from "./LiveMessage";
import { generate } from "../utils/Helpers";
import { RANDOM_JOKE_GENERATOR } from "../constants";
const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector(state => state.chat.messages);

  const randomJoke = async () => {
    const data = await fetch(RANDOM_JOKE_GENERATOR, {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await data.json();

    dispatch(
      addMessages({
        name: generate(),
        message: json?.joke,
      })
    );
  };

  useEffect(() => {
    const i = setInterval(() => {
      randomJoke();
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const handleSubmmit = e => {
    e.preventDefault();
    if (!chatText) return;
    dispatch(
      addMessages({
        name: "Srinivas🕺🏻🏃🏻‍♂️",
        message: chatText,
      })
    );
    setChatText("");
  };

  return (
    <form onSubmit={e => handleSubmmit(e)}>
      <div className=" mt-2 mx-1 border border-black h-[500px] rounded-lg overflow-y-scroll  flex flex-col-reverse">
        {chatMessages.map((chat, i) => {
          const { name, message } = chat;
          return <LiveMessage key={i} name={name} message={message} />;
        })}
      </div>
      <div className="p-1 flex">
        <input
          className="w-3/4 m-2 border border-black outline-none rounded-lg p-2"
          type="text"
          value={chatText}
          onChange={e => setChatText(e.target.value)}
        />
        <button className="p-2 mx-1 bg-green-300 w-20 m-2 cursor-pointer hover:opacity-80  ">
          send
        </button>
      </div>
    </form>
  );
};

export default LiveChat;
