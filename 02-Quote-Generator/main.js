const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: "sj.jpg"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    image: "pd.jpg"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    image: "tr.avif"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    image: "sl.jpg"
  },
  {
    text: "Work hard in silence, let success make the noise.",
    author: "Frank Ocean",
    image: "fo.jpg"
  },
  {
    text: "Every expert was once a beginner.",
    author: "Helen Hayes",
    image: "hh.jpg"
  },
  {
    text: "Success doesn't come to you. You go to it.",
    author: "Marva Collins",
    image: "mc.jpg"
  },
  {
    text: "The harder you work, the luckier you get.",
    author: "Gary Player",
    image: "gp.jpg"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    image: "lt.jpg"
  },
  {
    text: "Don't quit. Suffer now and live the rest of your life as a champion.",
    author: "Muhammad Ali",
    image: "muhammad_ali.avif"
  },
  {
    text: "Action is the foundational key to success.",
    author: "Pablo Picasso",
    image: "pp.jpg"
  },
  {
    text: "Never give up on a dream because of the time it will take.",
    author: "Earl Nightingale",
    image: "en.jpg"
  },
  {
    text: "Keep moving forward.",
    author: "Walt Disney",
    image: "wd.jpg"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    image: "mt.jpg"
  },
  {
    text: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
    image: "cg.jpg"
  },
  {
    text: "Success is a journey, not a destination.",
    author: "Arthur Ashe",
    image: "aas.jpg"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    image: "nm.jpg"
  },
  {
    text: "Be so good they can't ignore you.",
    author: "Steve Martin",
    image: "sm.jpg"
  },
  {
    text: "Failure is not the opposite of success. It's part of success.",
    author: "Arianna Huffington",
    image: "ah.jpg"
  },
  {
    text: "The best investment is in yourself.",
    author: "Warren Buffett",
    image: "wb.jpg"
  }
];


const btnElm = document.querySelector("button");
const textElm = document.querySelector(".quote-text");
const authorElm = document.querySelector(".quote-author");
const imageElm = document.querySelector(".quote-img");

const displayQuote = ({ text, author, image }) => {
    imageElm.src = `images/${image}`;
    textElm.textContent = text;
    authorElm.textContent = `— ${author}` 
}

const generateQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[index];
    displayQuote(selectedQuote);
}

generateQuote();

btnElm.addEventListener("click", generateQuote)