import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import sendBtn from './../../assets/images/send-button.png';
import smirk from './../../assets/images/smirk.png';
import './index.scss';
const CustomInput = ({ handleEnter, userList }) => {
  const [showPicker, setShowPicker] = useState(false);
  //   Displays emoji picker when true
  const [value, setValue] = useState('');
  //   Stores input value
  const [showSuggestions, setShowSuggestions] = useState();
  //   to show suggestion when @ is pressdd
  const inputRef = useRef(null);
  //   to focus on input field

  const onEnter = (val) => {
    // Send input value to parent component
    const message = value;
    handleEnter(message);
    setValue((state, props) => '');
  };
  const emojiClicked = (e) => {
    // Parse emoji and update input value with emoji
    setShowPicker(false);
    let arrayOfSym = [];
    let sym = e.unified.split('-');
    sym.forEach((el) => arrayOfSym.push('0x' + el));
    let emoji = String.fromCodePoint(...arrayOfSym);
    inputRef.current.focus();
    setValue((prevState) => {
      return prevState + emoji;
    });
  };
  const handleInputChange = (e) => {
    if (e.slice(-1) === '@') {
      // Check if last element is '@'
      setShowSuggestions(true);
    } else setShowSuggestions(false);
  };
  return (
    <div>
      <div className='custom-input__suggestion'>
        {showSuggestions &&
          userList.map((item) => (
            <div
              className='custom-input__suggestion--item'
              onClick={() => {
                setValue((prev) => prev + item.userName + ' ');
                setShowSuggestions(false);
                inputRef.current.focus();
              }}
              key={item.userId}
            >
              {item.userName}
            </div>
          ))}
      </div>
      <div className='custom-input'>
        <input
          type='text'
          className='custom-input__text-input'
          placeholder='Type Message'
          value={value}
          ref={inputRef}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
            handleInputChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (value.length === 0) return;
              onEnter(value);
            }
          }}
        />

        <span className='custom-input__icons'>
          <span
            className='submit-button custom-input__icons--send'
            onClick={(e) => {
              onEnter(value);
            }}
          >
            <img
              src={sendBtn}
              alt=''
              width={'24px'}
              height='24px'
              className='max-height-90'
            />
          </span>

          <span
            className='emoji-picker custom-input__icons--icon'
            style={{ cursor: 'pointer' }}
            onClick={() => setShowPicker((prev) => !prev)}
          >
            <img
              src={smirk}
              alt=''
              width={'30px'}
              height={'30px'}
              className='custom-input__icons--icon__image max-height-90'
            />
          </span>
          {showPicker && (
            <span className='custom-input__picker'>
              <Picker data={data} onEmojiSelect={(e) => emojiClicked(e)} />
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

CustomInput.propTypes = {
  handleEnter: PropTypes.func,
};

export default CustomInput;
