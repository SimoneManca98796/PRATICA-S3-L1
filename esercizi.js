const titleNew = document.getElementsByTagName("h1")[0];

titleNew.innerText = "ripasso";

console.log("il nuovo titolo è ", titleNew.innerText);

////////////////////////
// ESERCIZIO 2:
const addClassToTitle = function () {
  const newClass = document.getElementsByTagName("h1")[0];

  newClass.classList.add("myHeading");
};
addClassToTitle();
console.log("la classe è ora myHeading");

///////////
// ESERCIZIO3:
const changePcontent = function () {
  const paragraphsSons = document.querySelectorAll("div p");

  for (let i = 0; i < paragraphsSons.length; i++) {
    paragraphsSons[i].innerText = "esercizio tre fatto";
  }
};

changePcontent();

console.log("risolto!", changePcontent());

/////////////
// ESERCIZIO 4:
//  Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com

const changeUrls = function () {
  const anchorEx = document.getElementsByTagName("a")[0];
  anchorEx.setAttribute("href", "https://www.google.com");
};

changeUrls();

//////////////////ESERCIZIO 5:
// Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata

const addToTheSecond = function () {
  const newList = document.createElement("li");
  newList.innerText = "esercizio 5 fatto";

  const appendiamo = document.getElementById("secondList");
  appendiamo.appendChild(newList);
};

addToTheSecond();

/////// ESERCIZIO 6
//  Scrivi una funzione che aggiunga un paragrafo al primo div

const addParagraph = function () {
  const newParapraph = document.createElement("p");
  newParapraph.innerText = "esercizio 6 fatto";

  const primoDiv = document.getElementsByTagName("div")[0];
  primoDiv.appendChild(newParapraph);
};

addParagraph();

// ESERCIZIO 7
// Scrivi una funzione che faccia scomparire la prima lista non ordinata

const hideFirstUl = function () {
  const sparireList = document.getElementById("firstList");

  sparireList.style.display = "none";
};

hideFirstUl();

// ESERCIZIO 8
// Scrivi una funzione che renda verde il background di ogni lista non ordinata

const makeThemAllGreen = function () {
  const listeVerdi = document.getElementsByTagName("ul");

  for (let i = 0; i < listeVerdi.length; i++) {
    listeVerdi[i].style.backgroundColor = "green";
  }
};

makeThemAllGreen();

// ESERCIZIO 9
// Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca

const makeItClickable = function () {
  const ultimaLetteraH1 = document.getElementsByTagName("h1")[0];
  ultimaLetteraH1.innerText = ultimaLetteraH1.innerText.slice(
    0,
    ultimaLetteraH1.innerText.length - 1
  );
};

// ESERCIZIO 10
// Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()

const revealFooterLink = function () {
  const clickFooter = document.querySelector("footer a");
  const aClickFooter = clickFooter.getAttribute("href");
  alert(aClickFooter);
};

// ESERCIZIO
//     Crea una funzione che crei una tabella nell'elemento con id "tableArea".
//     La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo

const generateTable = function () {
  const container = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.style.width = "100%";

  const firstRow = document.createElement("tr");

  const thImage = document.createElement("th");
  thImage.innerText = "Immagine";
  const thProduct = document.createElement("th");
  thProduct.innerText = "Prodotto";
  const thQuantity = document.createElement("th");
  thQuantity.innerText = "Quantità";
  const thPrice = document.createElement("th");
  thPrice.innerText = "Prezzo";

  const images = [
    "https://m.media-amazon.com/images/I/81yJf4K+L1L._AC_SY450_.jpg",
    "https://m.media-amazon.com/images/I/61MRTh9xotL._AC_SX679_.jpg",
    "https://www.tradeinn.com/f/13805/138054505/samsung-smartphone-galaxy-s21-5g-8gb-128gb-6.2.jpg",
    "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1661333885.70133010!500x500.png",
    "https://tomatosmartphone.it/wp-content/uploads/2022/06/EU-IN_Green.png",
  ];

  firstRow.appendChild(thImage);
  firstRow.appendChild(thProduct);
  firstRow.appendChild(thQuantity);
  firstRow.appendChild(thPrice);
  table.appendChild(firstRow);

  for (let i = 0; i < images.length; i++) {
    const newRow = document.createElement("tr");

    const tdImage = document.createElement("td");
    tdImage.innerHTML = `<img src=${images[i]} alt="smartphone" height="200" />`;
    const tdProduct = document.createElement("td");
    tdProduct.innerText = "Smartphone";
    const tdQuantity = document.createElement("td");
    tdQuantity.innerText = Math.floor(Math.random() * 50);
    const tdPrice = document.createElement("td");
    tdPrice.innerText = Math.floor(Math.random() * 500) + "€";

    newRow.appendChild(tdImage);
    newRow.appendChild(tdProduct);
    newRow.appendChild(tdQuantity);
    newRow.appendChild(tdPrice);
    table.appendChild(newRow);
  }

  container.appendChild(table);
};

generateTable();

// ESERCIZIO 12
//
