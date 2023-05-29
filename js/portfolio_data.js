const DATA = [
  {
    link: "https://kholaps-music.com/",
    name: "Kholaps music",
    description:
      "Kholaps is DJ & producer from Switzerland. Using our technical knowledge, we helped kholaps reach new clients and get new listeners.",
    img: "images/portfolio/kholaps.png",
  },
  {
    link: "https://www.tehnoterm.net/",
    name: "TehnoTERM",
    description:
      "TehnoTERM is an engineering firm based in Jagodina. Website we built them is an example of our ability to adapt to all our client fields.",
    img: "images/portfolio/tehnoterm.png",
  },
  {
    link: "https://www.orlmarjanovic.com/",
    name: "ORL Marjanovic",
    description:
      "Website to showcase dr. Milan Marjanovic and his ordination in the best light possible. Including gallery, services and more.",
    img: "images/portfolio/orlmarjanovic.png",
  },
];

let currentPage = 1;
let NoPortfoliosPerPage = 0;
if (window.screen.width <= 425) NoPortfoliosPerPage = 2;
else if (window.screen.width > 425 && window.screen.width <= 768)
  NoPortfoliosPerPage = 4;
else NoPortfoliosPerPage = 6;

const NoPages = Math.round(DATA.length / NoPortfoliosPerPage);
console.log("NoPages", NoPages);

const portfoliosDiv = document.getElementById("portfolios");
const pagesDiv = document.getElementById("pages");

function getWork(element) {
  return `
    <article class='port-images' style='background-image: url(${element.img}) !important;'> 
        <div class="inner-text">
            <div class="inner-head">
            <h3>${element.name}</h3>
            <a href="${element.link}" class="connect-img"
                ><img src="images/connect.svg" alt=""
            /></a>
            </div>
            <div class="inner-body">
            <p>${element.description}</p>
            </div>
        </div>
        </article>
`;
}

function printData() {
  console.log("radi");
  for (let index = 0; index < NoPortfoliosPerPage; index++) {
    let curr = index + NoPortfoliosPerPage * (currentPage - 1);
    DATA[curr] && (portfoliosDiv.innerHTML += getWork(DATA[curr]));
  }
  pagesDiv.innerHTML +=
    '<a class="port-item" onclick="changePageUsingControllers(false)">Prev</a>';
  for (let index = 0; index < NoPages; index++) {
    pagesDiv.innerHTML +=
      "<a class='port-item " +
      (index + 1 == currentPage && "active") +
      "' onclick='changePageManual(" +
      (index + 1) +
      ")'> " +
      (index + 1) +
      "</a>";
  }
  pagesDiv.innerHTML +=
    '<a class="port-item" onclick="changePageUsingControllers(true)">Next</a>';
}

function changePageManual(page) {
  portfoliosDiv.innerHTML = "";
  pagesDiv.innerHTML = "";
  currentPage = page;
  printData();
}

function changePageUsingControllers(next) {
  portfoliosDiv.innerHTML = "";
  pagesDiv.innerHTML = "";
  if (next && currentPage + 1 <= NoPages) currentPage = currentPage + 1;
  if (!next && currentPage - 1 > 0) currentPage = currentPage - 1;
  printData();
}
