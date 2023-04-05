import React, { useEffect, useState, useRef } from "react";
import "./SMSsimulator.scss";
import { SmsResponse } from "./SMSresponses";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import dummyImg from "../../assets/images/dummy-img.png";

export const SMSsimulator = ({ SMSdata, userResponses }) => {
  let classEvenOdd = "";
  const [iniText, setIniText] = useState([SMSdata[0]]);
  const iniRef = useRef(null);
  const msgScroll = useRef(null);

  useEffect(() => {
    msgScroll.current.scrollIntoView();
  }, [iniText]);

  return (
    <MobileContainer className="smsImg">
      <div className="mobile-scroll-optin">
        {iniText.map((elem, index) => {
          const { message, href, img, classN } = elem;
          console.log(message, href, img, classN);
          if (index % 2 === 0) classEvenOdd = "sms-chat-globeEven";
          else classEvenOdd = "sms-chat-globeOdd";
          return (
            <>
              <div key={index} className={classEvenOdd}>
                {message.map((el, i) => {
                  return (
                    <p className={`sm-chat-msg ${classN}`} key={i}>
                      {el.includes("www") ? <a href={href}>{el}</a> : el}
                    </p>
                  );
                })}
                <div ref={msgScroll}></div>
              </div>
              {img.length ? (
                <div className="sm-chat-dummyImg">
                  <img src={dummyImg} alt="" />
                  <span className="sm-chat-dummyText ">{img}</span>
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <div className="sm-inputText">
        <input
          onKeyDown={(e) =>
            SmsResponse(e, userResponses, SMSdata, iniText, setIniText, iniRef)
          }
          className="sm-inputText-input"
          type="text"
          placeholder="Text message"
          ref={iniRef}
        />
      </div>
    </MobileContainer>
  );
};
