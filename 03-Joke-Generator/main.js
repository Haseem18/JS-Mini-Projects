const jokes = [
  {
    name: "Rajpal Yadav",
    joke: "Mummy bolti thi engineer ban ja... ab engineer banke mummy ko hi Wi-Fi restart karke de raha hoon.",
    image: "rajpal.jpg"
  },
  {
    name: "Kapil Sharma",
    joke: "Salary aate hi lagta hai Ambani hoon... 3 din baad Maggi ka budget banana padta hai.",
    image: "kapil.jpg"
  },
  {
    name: "Johnny Lever",
    joke: "Gym ki membership li thi... ab sirf payment ka notification hi roz aata hai.",
    image: "johnny.jpg"
  },
  {
    name: "Akshay Kumar",
    joke: "Alarm 5 baje ka lagata hoon motivation ke liye... uthta 9 baje hi hoon.",
    image: "akshay.jpg"
  },
  {
    name: "Paresh Rawal",
    joke: "Online shopping mein ₹99 bachane ke liye ₹999 aur kharch kar diye.",
    image: "paresh.jpg"
  },
  {
    name: "Boman Irani",
    joke: "Papa kehte hain phone chhod de... phir WhatsApp pe hi message bhej dete hain.",
    image: "boman.jpg"
  },
  {
    name: "Nawazuddin Siddiqui",
    joke: "Password itna strong banaya ki khud hi login nahi kar pa raha.",
    image: "nawaz.jpg"
  },
  {
    name: "Pankaj Tripathi",
    joke: "Exam ke ek din pehle lagta hai 1 saal aur mil jaye toh top kar dunga.",
    image: "pankaj.jpg"
  },
  {
    name: "Sunil Grover",
    joke: "Fridge kholke 5 minute dekhne se naya khana nahi aa jata... phir bhi dekhte hain.",
    image: "sunil.jpg"
  },
  {
    name: "Kiku Sharda",
    joke: "Google pe 'How to become rich' search kiya... pehle internet recharge karna pada.",
    image: "kiku.jpg"
  },
  {
    name: "Amitabh Bachchan",
    joke: "Mummy ka '2 minute' matlab minimum 30 minute hota hai.",
    image: "amitabh.jpg"
  },
  {
    name: "Shah Rukh Khan",
    joke: "Dil toh bachcha hai... lekin EMI adult wali chal rahi hai.",
    image: "srk.jpg"
  },
  {
    name: "Aamir Khan",
    joke: "Diet Monday se shuru hoti hai... har Monday.",
    image: "amir.jpg"
  },
  {
    name: "Salman Khan",
    joke: "Laptop khola padhne ke liye... 2 ghante baad memes dekh raha tha.",
    image: "salman.jpg"
  },
  {
    name: "Vir Das",
    joke: "Indian parents ke liye 99 marks bhi '1 mark kahan gaya?' hote hain.",
    image: "vir.jpg"
  },
  {
    name: "Ashish Chanchlani",
    joke: "Battery 1% pe ho toh phone Superman ban jata hai.",
    image: "ashish.jpg"
  },
  {
    name: "Bhuvan Bam",
    joke: "Room saaf karne gaya tha... purani photos dekhke 2 ghante nikal gaye.",
    image: "bb.jpg"
  },
  {
    name: "Harsh Beniwal",
    joke: "Hostel wale bolte hain ghar yaad aata hai... ghar wale bolte hain wapas mat aana.",
    image: "harsh.jpg"
  },
  {
    name: "CarryMinati",
    joke: "Assignment submit karne ka confidence tabhi aata hai jab sabne copy ki ho.",
    image: "carry.jpg"
  },
  {
    name: "Zakir Khan",
    joke: "Single hone ka sabse bada fayda... Valentine's Day pe paise bach jaate hain.",
    image: "zakir.jpg"
  }
];

const profileImg = document.querySelector(".profile-img");
const nameElm = document.querySelector(".name");
const jokeElm = document.querySelector(".joke");
const btnElm = document.querySelector(".btn");
const contentElm = document.querySelector(".content");

const generateJoke = () => {
    const selectedJoke = jokes[Math.floor(Math.random() * jokes.length)];

    contentElm.classList.remove("fade");
    profileImg.classList.remove("fade");
    void contentElm.offsetWidth;
    void profileImg.offsetWidth;
    contentElm.classList.add("fade");
    profileImg.classList.add("fade");

    profileImg.src = `./images/${selectedJoke.image}`;
    profileImg.alt = selectedJoke.name;

    nameElm.textContent = selectedJoke.name;
    jokeElm.textContent = selectedJoke.joke;
};

generateJoke();

btnElm.addEventListener("click", generateJoke);