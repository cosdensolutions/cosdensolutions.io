import React, { useState, useEffect } from 'react';

// external dependencies
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HomepageCode = (props) => {
  const codeString = `
import React, { useState, useEffect } from 'react';

// web app component
const WebApp = (props) => {
  const [title, setTitle] = useState('Web App');

  // sets document title
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="web-app">
      Welcome to {title}!
    </div>
  );
}

export default WebApp;
	`;

  // string
  const [string, setString] = useState(codeString);
  const [stringSplit, setStringSplit] = useState(0);
  const [loop, setLoop] = useState();

  useEffect(() => {
    let interval = null;
    let timeout = null;

    if (stringSplit <= string.length + 1) {
      interval = setInterval(() => {
        setStringSplit(stringSplit + 1);
        setString(codeString.substring(0, stringSplit + 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setStringSplit(0);
        setString('');
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(timeout);
    };
  }, [stringSplit]);

  return (
    <SyntaxHighlighter language="javascript" style={hybrid}>
      {string}
    </SyntaxHighlighter>
  );
};

export default HomepageCode;
