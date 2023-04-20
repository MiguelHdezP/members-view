import React, { useState } from "react";
import "./TabsContentsChats.scss";
import { chatTabs } from "../../../data/mockedData";
import { ChatBadges } from "../../chatBadges/ChatBadges";
import { BsCheckAll, BsCheck, BsChevronLeft } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Divider } from "../../divider/Divider";

const ActiveChats = () => {
  const [enterChat, setEnterChat] = useState(true);
  const [init, setInit] = useState("");
  const [name, setName] = useState("");
  const [classN, setClassN] = useState("");

  const renderInividualChat = (init = "", name = "", classN = "") => {
    setInit(init);
    setName(name);
    setClassN(classN);
    setEnterChat(false);
  };

  return enterChat ? (
    <div className="chats-contents-container">
      <ul className="chats-messages">
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("WJ", "Dr. Wall, Jeff", "chat-badge-color1")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("WN", "Willson, Nansy", "chat-badge-color2")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("BC", "Beesy, Clayton", "chat-badge-color3")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("GJ", "Gatsby, Jay", "chat-badge-color4")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
      </ul>
    </div>
  ) : (
    <div className="chats-contents-container chats-contents-container-individual">
      <ul className="chats-messages">
        <li className="chats-row" onClick={() => setEnterChat(true)}>
          <span>
            <BsChevronLeft />
          </span>
          <div className="chats-messages-container chats-messages-individual chat-row-flex2">
            <ChatBadges customClass={classN}>{init}</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">{name}</p>
              </div>
              <p className="text-smallText reset-margin">Online</p>
            </div>
          </div>
        </li>
        <Divider customClass="chats-divider" />
      </ul>
      <div className="chats-content-ongoing">
        <div className="chats-contents-left">
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply
            </p>
          </div>
        </div>
        <div className="chats-contents-right">
          <div className="chat-ongoing-globe2">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globes-container">
            <div className="chat-ongoing-globe2">
              <p className="text-smallText chat-ongoing-smallText reset-margin">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
            <p className="text-smallText  reset-margin chat-time-text">
              HH:MM AM
              <span>
                <BsCheckAll />
              </span>
            </p>
          </div>
        </div>
        <div className="chats-divider-sections">
          <span className="chats-divider-today text-smallText">Today</span>
          <Divider />
        </div>
        <div className="chats-contents-left">
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
        </div>
        <div className="chats-contents-right">
          <div className="chat-ongoing-globe2">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globes-container">
            <div className="chat-ongoing-globe2">
              <p className="text-smallText chat-ongoing-smallText reset-margin">
                Here is the text of the last chat.
              </p>
            </div>
            <p className="text-smallText  reset-margin chat-time-text">
              HH:MM AM
              <span>
                <BsCheckAll />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="chats-inputText">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your message"
          className="chats-input-input"
        />
        <span className="chats-input-plus">
          <FiPlus />
        </span>
      </div>
    </div>
  );
};

const Archived = () => {
  const [enterChat, setEnterChat] = useState(true);
  const [init, setInit] = useState("");
  const [name, setName] = useState("");
  const [classN, setClassN] = useState("");

  const renderInividualChat = (init = "", name = "", classN = "") => {
    setInit(init);
    setName(name);
    setClassN(classN);
    setEnterChat(false);
  };
  return enterChat ? (
    <div className="chats-contents-container">
      <ul className="chats-messages">
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("JC", "Chong, Jency", "chat-badge-color5")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
        <li
          className="chats-messages-row"
          onClick={() =>
            renderInividualChat("JC", "Conor, Jamal", "chat-badge-color1")
          }
        >
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
              <p className="text-smallText startS-title-text">
                You: Here is the text of the last chat.
              </p>
            </div>
          </div>
          <Divider customClass="chats-divider" />
        </li>
      </ul>
    </div>
  ) : (
    <div className="chats-contents-container chats-contents-container-individual">
      <ul className="chats-messages">
        <li className="chats-row" onClick={() => setEnterChat(true)}>
          <span>
            <BsChevronLeft />
          </span>
          <div className="chats-messages-container chats-messages-individual chat-row-flex2">
            <ChatBadges customClass={classN}>{init}</ChatBadges>
            <div className="chat-messages-texts">
              <div className="chat-messages-details">
                <p className="text-midText startS-title-text">{name}</p>
              </div>
              <p className="text-smallText reset-margin">Online</p>
            </div>
          </div>
        </li>
        <Divider customClass="chats-divider" />
      </ul>
      <div className="chats-content-ongoing">
        <div className="chats-contents-left">
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply
            </p>
          </div>
        </div>
        <div className="chats-contents-right">
          <div className="chat-ongoing-globe2">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globes-container">
            <div className="chat-ongoing-globe2">
              <p className="text-smallText chat-ongoing-smallText reset-margin">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
            <p className="text-smallText  reset-margin chat-time-text">
              HH:MM AM
              <span>
                <BsCheckAll />
              </span>
            </p>
          </div>
        </div>
        <div className="chats-divider-sections">
          <span className="chats-divider-today text-smallText">Today</span>
          <Divider />
        </div>
        <div className="chats-contents-left">
          <div className="chat-ongoing-globe1">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
        </div>
        <div className="chats-contents-right">
          <div className="chat-ongoing-globe2">
            <p className="text-smallText chat-ongoing-smallText reset-margin">
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="chat-ongoing-globes-container">
            <div className="chat-ongoing-globe2">
              <p className="text-smallText chat-ongoing-smallText reset-margin">
                Here is the text of the last chat.
              </p>
            </div>
            <p className="text-smallText  reset-margin chat-time-text">
              HH:MM AM
              <span>
                <BsCheckAll />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="chats-inputText">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your message"
          className="chats-input-input"
        />
        <span className="chats-input-plus">
          <FiPlus />
        </span>
      </div>
    </div>
  );
};

let chatTabsArray = [...chatTabs];

export let TabsContentsChats = chatTabsArray.map((ele, i) => {
  if (ele.id === 1) ele.component = <ActiveChats />;
  if (ele.id === 2) ele.component = <Archived />;
  return ele;
});
