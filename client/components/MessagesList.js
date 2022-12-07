import React, { useEffect, useState } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import axios from 'axios';

const MessagesList = (props)=> {
  const [messages, setMessages] = useState([]);
  

  useEffect(()=> {
    const fetchMessages = async()=> {
      try {
        const response = await axios.get('/api/messages');
        const messages = response.data;
        setMessages(messages);
      }
      catch(ex){
        console.log(ex);
      }
    }; 
    fetchMessages();
  }, []);



    return (
      <div>
        <ul className="media-list">
          { messages.filter( message => message.channelId === props.match.params.channelId*1).map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry />
      </div>
    );
}

export default MessagesList;
