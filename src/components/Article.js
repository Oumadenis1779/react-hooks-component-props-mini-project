import React from "react";



function Article(props) {
  const { title, date = "January 1, 1970", preview, minutesToRead } = props;

  
    
    function calculateEmojis(minutes) {
      const emojis = [];
      const coffeeCupEmoji = '☕️';
      const bentoBoxEmoji = '🍱';
  
      if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5);
        for (let i = 0; i < coffeeCups; i++) {
          emojis.push(coffeeCupEmoji);
        }
      } else {
        const bentoBoxes = Math.ceil(minutes / 10);
        for (let i = 0; i < bentoBoxes; i++) {
          emojis.push(bentoBoxEmoji);
        }
      }
  
      return emojis.join(' ');
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        <div>{calculateEmojis(minutesToRead)} {minutesToRead} min read</div>
      </article>
    );
  }
  export default Article
  