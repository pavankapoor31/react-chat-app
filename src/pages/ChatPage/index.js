import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MessageBox from '../../components/MessageBox';
import chatData from './../../assets/data/chatData.json';
import userList from './../../assets/data/userList.json';
import './index.scss';
const ChatPage = ({ data }) => {
  const [messageData, setMessageData] = useState(chatData);
  const [users] = useState(userList);
  const handleMessageSend = (data) => {
    setMessageData((state, props) => {
      scrollBottom();
      return [...state, data];
    });
  };
  const messageBody = React.createRef();
  const scrollBottom = () => {
    // const scroll =
    //   messageBody.current.scrollHeight - messageBody.current.clientHeight;
    messageBody.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='chat-app__container'>
      <div className='chat-app'>
        <div className='chat-app__header'>
          <Header />
        </div>
        <div className='chat-app__body'>
          {messageData &&
            messageData.map((item, i) => {
              return (
                <>
                  <span key={item.userName + i}>
                    <MessageBox {...item} />
                  </span>
                </>
              );
            })}
          <div ref={messageBody} style={{ paddingBottom: '6rem' }}></div>
        </div>
        <div className='chat-app__footer'>
          <div className='chat-app__footer__fixed'>
            <Footer
              handleMessageSend={handleMessageSend}
              setMessageData={setMessageData}
              userList={users}
              messageData={messageData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ChatPage.propTypes = {
  data: PropTypes.object,
};

export default ChatPage;
