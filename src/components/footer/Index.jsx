import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <span>Cosden </span> <span className="main-purple">Solutions</span> | ©{' '}
      {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
