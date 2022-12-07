import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchMessages } from "../features/messages/messagesSlice";
import { useSelector, useDispatch } from "react-redux";

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = "/channels/1";
const GENERAL_CHANNEL = "/channels/2";
const DOGS_CHANNEL = "/channels/3";
const LUNCH_CHANNEL = "/channels/4";

const ChannelList = () => {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  function numMessages() {
    return messages.filter((message) => message.channelId === 1).length;
  }

  return (
    <ul>
      <li>
        <NavLink to={RANDOM_CHANNEL} activeClassName="active">
          <span># really_random</span>
          <span className="badge">{numMessages()}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={GENERAL_CHANNEL} activeClassName="active">
          <span># generally_speaking</span>
          <span className="badge">{numMessages()}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={DOGS_CHANNEL} activeClassName="active">
          <span># dogs_of_fullstack</span>
          <span className="badge">{numMessages()}</span>
        </NavLink>
      </li>
      <li>
        <NavLink to={LUNCH_CHANNEL} activeClassName="active">
          <span># lunch_planning</span>
          <span className="badge">{numMessages()}</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ChannelList;
