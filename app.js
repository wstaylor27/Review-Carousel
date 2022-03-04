// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jonathan Alexander",
    job: "UX Designer",
    img: "./pics/jonathan-alexander.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dolor. Officia a neque atque nostrum quas. Sed necessitatibus at quas.",
  },
  {
    id: 2,
    name: "Wes Taylor",
    job: "Full Stack Web Developer",
    img: "./pics/wesley-taylor.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dolor. Officia a neque atque nostrum quas. Sed necessitatibus at quas.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person

// randomBtn.addEventListener("click", function () {
//   currentItem = Math.floor(Math.random() * reviews.length);
//   showPerson();
// });
