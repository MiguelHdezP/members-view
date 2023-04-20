import React from "react";
import "./TabsContentsChats.scss";
import { chatTabs } from "../../../data/mockedData";
import { ChatBadges } from "../../chatBadges/ChatBadges";
import { BiCheckDouble } from "react-icons/bi";

const ActiveChats = () => {
  return (
    <div className="chats-contents-container">
      <ul className="chats-messages">
        <li className="chats-messages-row">
          <ChatBadges>WJ</ChatBadges>
          <div className="chat-messages-texts">
            <div className="chat-messages-details">
              <p className="text-midText startS-title-text">Dr. Wall, Jeff</p>
              <p className="text-smallText startS-title-text">11/17/22 10:19</p>
              <span>
                <BiCheckDouble />
              </span>
            </div>
            <p className="text-smallText">
              You: Here is the text of the last chat.
            </p>
          </div>
        </li>
        <li className="chats-messages-row">
          <ChatBadges>WJ</ChatBadges>
          <div className="chat-messages-texts">
            <div className="chat-messages-details">
              <p className="text-midText startS-title-text">Dr. Wall, Jeff</p>
              <p className="text-smallText startS-title-text">11/17/22 10:19</p>
              <span>
                <BiCheckDouble />
              </span>
            </div>
            <p className="text-smallText">
              You: Here is the text of the last chat.
            </p>
          </div>
        </li>
        <li className="chats-messages-row">
          <ChatBadges>WJ</ChatBadges>
          <div className="chat-messages-texts">
            <div className="chat-messages-details">
              <p className="text-midText startS-title-text">Dr. Wall, Jeff</p>
              <p className="text-smallText startS-title-text">11/17/22 10:19</p>
              <span>
                <BiCheckDouble />
              </span>
            </div>
            <p className="text-smallText">
              You: Here is the text of the last chat.
            </p>
          </div>
        </li>
        <li className="chats-messages-row">
          <ChatBadges>WJ</ChatBadges>
          <div className="chat-messages-texts">
            <div className="chat-messages-details">
              <p className="text-midText startS-title-text">Dr. Wall, Jeff</p>
              <p className="text-smallText startS-title-text">11/17/22 10:19</p>
              <span>
                <BiCheckDouble />
              </span>
            </div>
            <p className="text-smallText">
              You: Here is the text of the last chat.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Archived = () => {
  return (
    <div className="auth-inputs-authPhone">
      <ul className="chats-messgaes">
        <li className="chats-messgaes-row">
          <ChatBadges>WJ</ChatBadges>
        </li>
        <li className="chats-messgaes-row"></li>
        <li className="chats-messgaes-row"></li>
        <li className="chats-messgaes-row"></li>
        <li className="chats-messgaes-row"></li>
      </ul>
    </div>
  );
};

let AuthContents = [...chatTabs];

export let TabsContentsChats = AuthContents.map((ele, i) => {
  if (ele.id === 1) ele.component = <ActiveChats />;
  if (ele.id === 2) ele.component = <Archived />;
  return ele;
});
