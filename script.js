// 1) ESERCIZIO 1:
const titleOfThePage = document.getElementsByTagName("title")[0];

titleOfThePage.innerText;
console.log(titleOfThePage.innerText);

titleOfThePage.innerText = "PRATICA!";

const titleOfThePageH1 = document.getElementsByTagName("h1")[0];

titleOfThePageH1.innerText;
console.log(titleOfThePageH1.innerText);

titleOfThePage.innerText = "Esercizi!";
console.log(titleOfThePage);
// -------
// 2) ESERCIZIO 2:
function addClassToTitle(classe) {
  const title = document.getElementsByTagName("h1")[0];
  title.classList.add(classe);
}
addClassToTitle("myHeading");

/* myH1.classList.add('myHeading') */
console.log(addClassToTitle);
// ------
// 3) ESERCIZIO 3:
const changePcontent = function () {
  const paragraph = document.querySelectorAll(".esercizio p")[0];
  paragraph.innerText = "RISOLVO ESERCIZIO 3!";
};

changePcontent();
console.log(changePcontent);
// ------
// 4) ESERCIZIO 4:

const changeUrls = function () {
  const link = document.getElementsByClassId();
  link.setAttribute("href", "https://www.google.com");
};

console.log(changeUrls);
// ----------
// ESERCIZIO 5:
const addToTheSecond = function () {
  const secondList = document.getElementById("secondList");

  if (secondList) {
    const newItem = document.createElement("li");
    newItem.textContent = "Nuovo Elemento";

    secondList.appendChild(newItem);
  }
};

addToTheSecond();
//-------
// ESERCIZIO 6:

/* const addParagraph = function () {
  const firstDiv = document.querySelector("div");
  firstDiv.appendChild(newParagraph);
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Risolvo esercizio 6!";
  firstDiv.appendChild(newParagraph);
};

addParagraph();
console.log(addParagraph); */
//------
// ESERCIZIO 7:

const hideFirstUl = function () {
  const firstList = document.getElementById("firstList");
  firstList.style.display = "none";
};

hideFirstUl();
console.log(hideFirstUl);
// ------
// ESERCIZIO 8:

const makeThemAllGreen = function () {
  const allTheListItems = document.querySelectorAll("ul li");
  for (let i = 0; i < allTheListItems.length; i++) {
    allTheListItems[i].style.color = "green";
  }
};

makeThemAllGreen();
// ------
// ESERCIZIO 9:
/*const makeItClickable = function () {
  const h1Element = document.getElementsByTagName("h1")[0];
  h1Element.classList.add("invisible");
}; */
// --------
// ESERCIZIO 10:
/* const makeItClickable = function () {
  const footerElement = document.getElementsByTagName("footer")[0];
  footerElement.classList.add("URL");
};

makeItClickable();

const url = link.href;
alert("L'URL del link interno è: " + url); */
// -------
// ESERCIZIO 11:
