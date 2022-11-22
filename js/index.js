//Object Array to hold quotes, sources, citaitons and years
const quotes = [
  {
    quote: "More fuck yeah, less fuck that.",
    source: "Anonymous",
  },
  {
    quote:
      "If you want to go fast, go alone. If you want to go far, go together.",
    source: "African proverb",
  },
  {
    quote: "It's OK to not be OK, as long as you don't stay that way.",
    source: "Anonymous",
  },
  {
    quote:
      "I can be changed by what happens to me but I refuse to be reduced by it.",
    source: "Maya Angelou",
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "T. Roosevelt",
  },
];

// random text
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomNumber];
  return randomQuote;
}
// random color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  return randomColor;
}
//function click
function printQuote() {
  const quotes = getRandomQuote();
  const backgroundColor = getRandomColor();

  const quoteText = document.getElementById("text");
  const quoteAuthor = document.getElementById("author");

  quoteText.innerText = quotes.quote;
  quoteAuthor.innerText = quotes.source;

  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("new-quote").style.backgroundColor = backgroundColor;
  document.getElementById("tweet-quote").style.backgroundColor =
    backgroundColor;
  document.getElementById("tumblr-quote").style.backgroundColor =
    backgroundColor;
  document.getElementById("quote-box").style.color = backgroundColor;
}

document.getElementById("new-quote").addEventListener("click", printQuote);
