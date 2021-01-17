import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inp, setInp] = useState("");
  const emoji = {
    "😀": "Smiling",
    "😲": "disbelief",
    "😢": "sad",
    "😭": "crying",
    "💕": "love"
  };
  return (
    <div className="App">
      <h1>Emoji Interpretator</h1>
      <input
        onChange={(e) => {
          setInp(e.target.value);
          console.log(e.target.value);
        }}
        value={inp}
      />
      {emoji.map(emote =>{
        <h1>emote</h1>
      })}
    </div>
  );
}
