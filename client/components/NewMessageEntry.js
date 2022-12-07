import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessage } from "../features/messages/messagesSlice";

const NewMessageEntry = (props) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(postMessage({ content, channelId: props.channelId }));
  };

  console.log(handleSubmit);

  return (
    <form id="new-message-form" onSubmit={handleSubmit}>
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="content"
          value={content}
          placeholder="Say something nice..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">
            Chat!
          </button>
        </span>
      </div>
    </form>
  );
};

export default NewMessageEntry;
