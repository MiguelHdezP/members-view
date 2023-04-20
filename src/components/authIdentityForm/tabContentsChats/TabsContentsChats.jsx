import React from "react";
import "./TabsContentsChats.scss";
import { chatTabs } from "../../../data/mockedData";
import { ChatBadges } from "../../chatBadges/ChatBadges";
import { BsCheckAll, BsCheck } from "react-icons/bs";
import { Divider } from "../../divider/Divider";

const ActiveChats = () => {
  return (
    <div className="chats-contents-container">
      <ul className="chats-messages">
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color1">WJ</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Dr. Wall, Jeff</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheckAll />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color2">WN</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Willson, Nansy</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheckAll />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color3">BC</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Beesy, Clayton</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheck />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color4">GJ</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Gatsby, Jay</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheck />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
      </ul>
    </div>
  );
};

const Archived = () => {
  return (
    <div className="chats-contents-container">
      <ul className="chats-messages">
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color5">JC</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Chong, Jency</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheckAll />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li className="chats-messages-row">
          <div className="chats-messages-container">
            <ChatBadges customClass="chat-badge-color1">JC</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">Conor, Jamal</p>
                <p className="text-smallText startS-title-text">
                  11/17/22 10:19
                </p>
                <span>
                  <BsCheckAll />
                </span>
              </div>
              <p className="text-smallText">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
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
