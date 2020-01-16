import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <span>Cosden Solutions</span> | © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
