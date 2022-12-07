import React from 'react';

const NewMessageEntry = ()=> {
  return (
    <form id="new-message-form">
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          name="content"
          placeholder="Say something nice..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Chat!</button>
        </span>
      </div>
    </form>
  );
}

export default NewMessageEntry;
