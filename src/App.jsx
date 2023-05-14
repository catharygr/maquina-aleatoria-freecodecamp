import React, { useState, useEffect } from "react";
import "/style.css";
import data from "../data";

export default function App() {
  const [quote, setQuote] = useState({});

  function handleRandom() {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    setQuote(randomQuote);
  }
  useEffect(() => {
    handleRandom();
  }, []);

  return (
    <main id="quote-box">
      <q id="text">{quote?.quote}</q>
      <p id="author">{quote?.author}</p>
      <div className="botones">
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Tuitea esta frase!
        </a>
        <button onClick={handleRandom} id="new-quote">
          Nueva frase
        </button>
      </div>
    </main>
  );
}
