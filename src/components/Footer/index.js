import React from 'react';
import moment from 'moment';
import CustomInput from '../CustomInput';
const Footer = ({ handleMessageSend, userList }) => {
  const handleEnter = (data) => {
    if (data.length === 0) {
      return;
    }
    const messageDateTime = new Date();
    const randomNumber = Math.floor(Math.random() * userList.length);
    // Generate random number for random user
    const temp = {
      userImage: userList[randomNumber].userImage,
      userName: userList[randomNumber].userName,
      messageTime: moment(messageDateTime).format('HH:MM'),
      userMessage: data,
      userId: userList[randomNumber].userId,
    };
    // Temp stores random user details and the message from input
    handleMessageSend(temp);
  };

  return (
    <>
      <CustomInput handleEnter={handleEnter} userList={userList} />
    </>
  );
};

export default Footer;
