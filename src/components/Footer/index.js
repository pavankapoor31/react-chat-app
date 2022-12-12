import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';

const Footer = ({ handleMessageSend, userList }) => {
  const [text, setText] = useState('');
  const time = Math.random();
  const handleEnter = () => {
    if (text.length === 0) {
      return;
    }
    const randomNumber = Math.floor(Math.random() * userList.length);
    const temp = {
      userImage: userList[randomNumber].userImage,
      userName: userList[randomNumber].userName,
      messageTime: time,
      userMessage: text,
      userId: userList[randomNumber].userId,
    };
    handleMessageSend(temp);
  };

  return (
    <div>
      <InputEmoji
        placeholder={'Type Message'}
        onChange={setText}
        onEnter={handleEnter}
        cleanOnEnter={true}
      />
    </div>
  );
};

export default Footer;
