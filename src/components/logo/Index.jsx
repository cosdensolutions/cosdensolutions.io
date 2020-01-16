import React from 'react';

// internal dependencies
//
import history from 'utils/history';

const Logo = (props) => {
  return (
    <img
      className="logo"
      src="/assets/img/shared/logo.png"
      onClick={() => history.push('/')}
    />
  );
};

export default Logo;
