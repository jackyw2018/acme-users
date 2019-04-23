import React, { Fragment } from 'react';

const Highlight = ({ text = '', highlight = '' }) => {
  // styling for highlighted texts
  const styles = {
    highlight: {
      backgroundColor: '#FFD770',
    },
  };

  // helper function that turns a string to [{text: 'aa', toHighlight: false}...]
  const breakTextToObjects = (text, highlight) => {
    let arrOfObjects = [];

    // if text does not include the text to highlight or text to highlight does not exist
    // return [{text:'inputText', toHighlight: false}]
    if (!text.toLowerCase().includes(highlight.toLowerCase()) || !highlight) {
      arrOfObjects.push({ text, toHighlight: false });
      return arrOfObjects;
    }

    let i = 0;

    // loop through and keep track
    while (i < text.length) {
      const subStr = text.slice(i, i + highlight.length);

      if (subStr.toLowerCase() === highlight.toLowerCase()) {
        arrOfObjects.push({ text: subStr, toHighlight: true });
        i = i + highlight.length;
      } else {
        if (!arrOfObjects.length)
          arrOfObjects.push({ text: text[i], toHighlight: false });
        else if (!arrOfObjects[arrOfObjects.length - 1].toHighlight) {
          arrOfObjects[arrOfObjects.length - 1].text += text[i];
        } else {
          arrOfObjects.push({ text: text[i], toHighlight: false });
        }
        i++;
      }
    }

    return arrOfObjects;
  };

  return (
    <Fragment>
      {breakTextToObjects(text, highlight).map(({ text, toHighlight }) => {
        return toHighlight ? (
          <span style={styles.highlight}>{text}</span>
        ) : (
          text
        );
      })}
    </Fragment>
  );
};

export default Highlight;
