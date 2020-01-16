import React, { useState } from 'react';

// external dependencies
//
const classNames = require('classnames');

const TextArea = (props) => {
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
    'is-area': true,
    'is-focused': focused,
  });

  return (
    <div className="text-area">
      <label className={labelClassNames}>{label}</label>
      <textarea
        className={inputClassNames}
        value={value}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={!value ? () => setFocused(false) : null}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
