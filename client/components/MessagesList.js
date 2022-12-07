import React, { useEffect, useState } from "react";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
import { fetchMessages } from "../features/messages/messagesSlice";
import { useSelector, useDispatch } from "react-redux";

const MessagesList = (props) => {
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>
      <ul className="media-list">
        {messages
          ? messages
              .filter(
                (message) =>
                  message.channelId === props.match.params.channelId * 1
              )
              .map((message) => <Message message={message} key={message.id} />)
          : null}
      </ul>
      <NewMessageEntry channelId={props.match.params.channelId} />
    </div>
  );
};

export default MessagesList;
