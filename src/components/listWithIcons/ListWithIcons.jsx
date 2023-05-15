import React from "react";
import "./ListWithIcons.scss";
import { listActivity } from "../../data/mockedData";
import { ChatBadges } from "../chatBadges/ChatBadges";
import { IconContext } from "react-icons";

export const ListWithIcons = ({ customClass = "" }) => {
  return (
    <ul className={`list-section ${customClass}`}>
      {listActivity.map((el) => {
        const {
          id,
          iconText,
          icon,
          title,
          textComplement,
          helperText,
          newMsg,
        } = el;

        let badgeColor = "";

        switch (helperText) {
          case "Chat":
            badgeColor = "list-chat-badge";
            break;
          case "Appointments":
            badgeColor = "list-calen-badge ";
            break;
          case "Trophies":
            badgeColor = "list-troph-badge ";
            break;
          default:
            break;
        }

        return (
          <li
            key={id}
            className={`list-row ${newMsg ? "" : "list-row-readed"}`}
          >
            <IconContext.Provider
              value={{
                style: { fontSize: "1.5rem" },
              }}
            >
              <ChatBadges customClass={`list-icon ${badgeColor}`}>
                {iconText.length ? iconText : icon}
              </ChatBadges>
            </IconContext.Provider>
            <div className="list-texts">
              <p className="list-title">{title}</p>
              <p className="list-textComplement">{textComplement}</p>
              <p className="list-helperText">{helperText}</p>
            </div>
            {newMsg ? <span className="list-newMsg"></span> : ""}
          </li>
        );
      })}
    </ul>
  );
};
