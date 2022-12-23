const DATA = [
  {
    link: "#",
    name: "1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "5",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "6",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "7",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "8",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
  },
  {
    link: "#",
    name: "9",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi elementum eget massa urna pharetra lobortis feugiat tempus urna.",
    img: "images/connect.svg",
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
    <article class='port-images'> 
        <div class="inner-text">
            <div class="inner-head">
            <h3>${element.name}</h3>
            <a href="${element.link}" class="connect-img"
                ><img src="${element.img}" alt=""
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
