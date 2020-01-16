import React from 'react';

// external dependencies
//
const classNames = require('classnames');

const Button = (props) => {
  const { disabled, secondary, onClick, style, text } = props;

  // classnames
  const className = classNames({
    button: true,
    'is-secondary': secondary,
    'is-disabled': disabled,
  });

  // push down
  const pushDown = (e) => {
    const classList = e.target.classList;

    classList.add('is-mouse-down');
    classList.remove('is-mouse-up');
  };

  // release
  const release = (e) => {
    const classList = e.target.classList;

    e.target.classList.add('is-mouse-up');
    classList.remove('is-mouse-down');
  };

  return (
    <button
      className={className}
      onClick={disabled ? null : onClick}
      onMouseDown={disabled ? null : pushDown}
      onMouseUp={disabled ? null : release}
      onTouchStart={disabled ? null : pushDown}
      onTouchEnd={disabled ? null : release}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
