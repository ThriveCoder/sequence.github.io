const closeBtn = document.querySelector(".fa-times");
closeBtn.style.display = "none";
const navMenu = document.querySelector(".menu");
// navMenu.style.display = "none";
const navBtn = document.querySelectorAll(".nav");

navBtn.forEach((navBar) => {
  navBar.addEventListener("click", function () {
    if (navBar.classList.contains("fa-align-left")) {
      navBar.classList.toggle("fa-times");
      document.querySelector("header").classList.toggle("chgHdrClr");
      navMenu.classList.add("visible");
    }
  });
});

// const navBtn = document.querySelectorAll(".switch");
// const body = document.querySelector("body");

// navBtn.forEach((item) => {
//   const menu = document.getElementById("modal");

//   item.addEventListener("click", () => {
//     if (item.classList.contains("fa-align-left")) {
//       item.classList.toggle("fa-times");
//       menu.classList.toggle("mainMenu");
//       // console.log(menu);
//     }

//     if (!menu.classList.contains("mainMenu")) {
//       document.body.classList.add("scroll");
//     } else {
//       document.body.classList.remove("scroll");
//     }
//   });
// });

// let words = [
//   "with data analysis",
//   " with data interpretion",
//   "to develop and implement database",
//   "to acquire data from primary and secondary data sources and maintain database/data system",
// ];
// let output = document.getElementById("complete");

// let idx = 0;
// let str = "";

// function typeWrite() {
//   if (idx >= words.length) idx = 0;

//   let word = words[idx];
//   let charInd = 0;
//   let interval = setInterval(() => {
//     if (charInd >= word.length) {
//       clearInterval(interval);
//       setTimeout(() => {
//         idx++;
//         str = "";
//         typeWrite();
//       }, 1000); // <- Wait for 1 sec before printing next word
//     }
//     str += word.charAt(charInd);
//     output.innerHTML = str;
//     charInd++;
//   }, 100); // <- Delay between each character
// }

// typeWrite();
