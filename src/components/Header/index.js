import React from 'react';
import PropTypes from 'prop-types';
import defaultUserImage from './../../assets/images/user.png';
import './index.scss';
export const Header = ({ title, description, noOfUsers, totalUsers }) => {
  return (
    <div className='header'>
      <div className='header__left'>
        <div className='header__title'>{title}</div>
        <div className='header__description'>{description}</div>
      </div>
      <div className='header__right'>
        {`${noOfUsers} | ${totalUsers}`}
        <img src={defaultUserImage} alt='' width='25px' height='25px' />
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  noOfUsers: PropTypes.number,
  totalUsers: PropTypes.number,
};
Header.defaultProps = {
  title: 'Introductions',
  description: 'This Channel Is For Company Wide Chatter',
  noOfUsers: 4,
  totalUsers: 100,
};

export default Header;
