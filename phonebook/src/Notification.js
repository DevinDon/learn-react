import React from 'react';

const Notification = ({ message: { type, text } }) => {

  const styles = {
    success: {
      'color': 'green',
      'background': 'lightgrey',
      'fontSize': '20',
      'borderStyle': 'solid',
      'borderRadius': '5',
      'padding': '10',
      'marginBottom': '10',
    },
    fail: {
      'color': 'red',
      'background': 'lightgrey',
      'fontSize': '20',
      'borderStyle': 'solid',
      'borderRadius': '5',
      'padding': '10',
      'marginBottom': '10',
    },
  };

  return text ? <div style={styles[type]}>{text}</div> : <></>;
};

export default Notification;
