import React from "react";
import "/style.css";

// function Quotes() {
//   const quotes = [
//     {
//       id: 1,
//       color: "red",
//       author: "-Colina de napoleón",
//       quote:
//         "Cualquier cosa que la mente del hombre pueda concebir y creer, puede lograrlo.",
//     },
//     {
//       id: 2,
//       color: "red",
//       author: "-Bob maya angelou",
//       quote: "No se puede agotar la creatividad. Cuanto más usas, más tienes..",
//     },
//     {
//       id: 3,
//       color: "red",
//       author: "-Bob normando vicent peale",
//       quote: "Cambia tus pensamientos y cambiarás tu mundo.",
//     },
//     {
//       id: 4,
//       color: "red",
//       author: "-Bob Confucio",
//       quote: "Todo tiene belleza, pero no todos pueden ver.",
//     },
//     {
//       id: 5,
//       color: "red",
//       author: "-Bob gloria steinem",
//       quote: "Soñar, después de todo, es una forma de planificación.",
//     },
//     {
//       id: 6,
//       color: "purple",
//       author: "-Bob Henry David Thoreau",
//       quote:
//         "Vaya con confianza en dirección de sus sueños. Vive la vida que has imaginado",
//     },
//     {
//       id: 7,
//       color: "purple",
//       author: "-Bob Booker T.Washington",
//       quote: "Si quieres levantarte a ti mismo, levanta a alguien más.",
//     },
//     {
//       id: 8,
//       color: "purple",
//       author: "-Bob normando vicent peale",
//       quote: "Cambia tus pensamientos y cambiarás tu mundo.",
//     },
//     {
//       id: 9,
//       color: "purple",
//       author: "-Bob Pablo Picasso",
//       quote:
//         "Todo niño es un artista. El problema es cómo seguir siendo un artista una vez que crece.",
//     },
//     {
//       id: 10,
//       color: "purple",
//       author: "-Bob mae jemison",
//       quote:
//         "Es tu lugar en el mundo; es tu vida. Continúa y haz todo lo que puedas con él, y conviértelo en la vida que quieres vivir.",
//     },
//   ];

//   const mapeo = quotes.map((quot) => {
//     const { id, color, author, quote } = quot;
//   });

// function RandomQuotes({ quot }) {
//   const { id, color, author, quote } = quot;
//   const quotesRandom = Math.floor(Math.random() * quotes.length);

function App() {
  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="quote-text" style={{ opacity: 1 }}>
          <i className="fa fa-quote-left"></i>
          <span id="text">Soy yo</span>
        </div>
        <div className="quote-author" style={{ opacity: 1 }}>
          <span id="author">Sasa Savic</span>
        </div>
        <div id="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tuitea esta cita!"
            target="_top"
            href="https://twitter.com/"
            style={{ backgroundColor: "red" }}
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Pública esta cita en tumblr!"
            target="_top"
            href="https://www.tumblr.com"
            style={{ backgroundColor: "blue" }}
          >
            <i className="fa fa-tumblr"></i>
          </a>
          <button
            style={{ backgroundColor: "yellow" }}
            className="button"
            id="new-quote"
          >
            Click
          </button>
        </div>
      </div>
      <div className="footer">
        por
        <a href="htpps://bubulazi.com">Bubulazi</a>
      </div>
    </div>
  );
}
export default App;
