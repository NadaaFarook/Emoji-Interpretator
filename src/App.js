import React, { useState } from "react";
import "./styles.css";

const emoji = {
  "😀": "Smiling",
  "😲": "disbelief",
  "😢": "sad",
  "😭": "crying",
  "💕": "love"
};

var emojiweknow = Object.keys(emoji);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(e) {
    let input = e.target.value;
    // console.log(emoji[input]);
    var meaning = emoji[input];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function EmojiClickHandler(emoj) {
    var meaning = emoji[emoj];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretator</h1>
      <input onChange={emojiHandler} />
      <h2>Meaning : {meaning}</h2>
      <h2>
        {emojiweknow.map((emoji) => (
          <span
            key={emoji}
            onClick={() => {
              EmojiClickHandler(emoji);
            }}
          >
            {emoji}
          </span>
        ))}
      </h2>
    </div>
  );
}
