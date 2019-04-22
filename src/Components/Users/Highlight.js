import React, { Fragment } from 'react';

const Highlight = ({ text = '', highlight = '' }) => {
  const styles = {
    highlight: {
      backgroundColor: '#FFD770',
    },
  };

  const parts = (str, length) => {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
  };

  if (!highlight) return <Fragment>{text}</Fragment>;

  return (
    <Fragment>
      {parts(text, highlight.length).map((subStr, idx) => {
        return subStr.toLowerCase() !== highlight.toLowerCase() ? (
          subStr
        ) : (
          <span key={idx} style={styles.highlight}>
            {subStr}
          </span>
        );
      })}
    </Fragment>
  );
};

export default Highlight;
