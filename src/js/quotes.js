const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The most difficult thing in life is to know yourself.",
    author: "Yogi Bear",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "War and Peace",
  },
  {
    quote:
      "Life is like a box of chocolates. You never know what you're gonna get.",
    author: "Albert Einstein",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "The greatest wealth is not in the physical possessions, but in the spiritual ones.",
    author: "John Locke",
  },
  {
    quote: "It is not the destination, but the journey that matters.",
    author: "Ralph Waldo Emerson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
