import React, { useState } from 'react';

// external dependencies
//
const classNames = require('classnames');

const TextInput = (props) => {
  const { name, label, defaultValue } = props;

  // value
  const [value, setValue] = useState(defaultValue || '');

  const [focused, setFocused] = useState(false);

  // input
  const inputClassNames = classNames({
    'is-focused': focused,
  });

  // label
  const labelClassNames = classNames({
    'is-text': true,
    'is-focused': focused,
  });

  return (
    <div className="text-input">
      <label className={labelClassNames}>{label}</label>
      <input
        type="text"
        name={name}
        className={inputClassNames}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={!value ? () => setFocused(false) : null}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
