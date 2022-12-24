const languageData = [
  {
    nav: [
      { href: "#offer", text: "Šta vam nudimo?" },
      { href: "#team", text: "Ko smo mi?" },
      { href: "#portfolio", text: "Naš portfolio" },
      { href: "#contact", text: "Kontakt" },
    ],
    hero: "Dizajn i development agencija<br />za <span> digitalno doba</span>",
    button: { contact: "Kontakt", send: "Pošaljite" },
    offer: {
      title: "Šta vam nudimo?",
      points: [
        {
          img: "images/brush.svg",
          text: "Dizajn, izrada i unapredjivanje vebsajta",
        },
        {
          img: "images/seo.svg",
          text: "SEO Optimizacija",
        },
        {
          img: "images/lock.svg",
          text: "Enkripcija podata i bezbednost",
        },
        {
          img: "images/hp.svg",
          text: "Celodnevna podrška",
        },
      ],
    },
    team: {
      title: "Ko smo mi?",
      memberDesc: {
        milan:
          "Milan studira Računarske nauke na matematičkom fakultetu u Novom Sadu. On je full stack web developer koji je oduvek voleo programiranje. Kao mladić je krenuo da uči programiranje i thnologije za razvoj veb aplikacija. Iako je mlad, on je učestvovao na više takmičenja koja sa timom pobedio i radio sa kompanijom Vega IT na projektu.",
        nikola:
          "Nikola je grafički dizajner sa fokusom na UI/UX. On je završio elektrotehničku školu i od tada je počeo da se bavi dizajnom veb stranica. Stalno se usavršava u korišćenju front-end tehnologija poput HTML-a, CSS-a i JavaScript-a. Ima talent za razumevanje potreba korisnika i stvaranje dizajna koji je jednostavan za korišćenje i zanosan za gledanje.",
        pavle:
          "Pavle je student medicine koji ima ljubav prema IT-u. On je front-end developer koji se bavi izradom i održavanjem web stranica. On je stručnjak u korišćenju HTML-a, CSS-a i JavaScript-a za stvaranje atraktivnih i funkcionalnih web stranica.On voli raditi sa svojim klijentima da bi im pomogao da ostvare svoje ciljeve i steknu uspeh na internetu.",
        mateja:
          "Mateja je ekstrovertan i druželjubiv student hotelijerstva koji se bavi marketingom i pisanjem sadržaja. Mateja ima talent za pisanje i uživa u razvijanju različitih vrsta sadržaja, od kratkih oglasa do dugih članaka. On je posvećen radu sa svojim klijentima i uvek se trudi da im pruži najbolju moguću uslugu.",
      },
    },
    portfolio: {
      title: "Naš portfolio",
    },
    contact: {
      title: "Kontaktirajte nas",
    },
  },
  // ENG
  // GER
  // FRA
];

function applyLanguage(lang) {
  if (languageData[lang] == undefined) return;
  document.getElementById("navItemsLang").innerHTML = "";
  languageData[lang].nav.forEach((navItem) => {
    document.getElementById("navItemsLang").innerHTML += `<li>
                <a class="dropdown-item" href="${navItem.href}">${navItem.text}</a>
              </li>`;
  });

  document.getElementById("heroLang").innerHTML = "";
  document.getElementById("heroLang").innerHTML += `<h1>
            ${languageData[lang].hero}
          </h1>
          <h1 class="h1-overlay">
            ${languageData[lang].hero}
          </h1>`;

  document.getElementById("offerTitleLang").innerHTML =
    languageData[lang].offer.title;
  document.getElementById("offerDetailsLang").innerHTML = "";
  languageData[lang].offer.points.forEach((offerItem) => {
    document.getElementById("offerDetailsLang").innerHTML += `<p>
                    <img class="icon" src="${offerItem.img}" alt="" />
                    <span>${offerItem.text}</span>
                  </p>`;
  });
  document.getElementById("offerButtonLang").innerHTML = `
  ${languageData[lang].button.contact}
  <img src="images/arrow-white.svg" alt="" />
  `;

  document.getElementById("teamTitleLang").innerHTML =
    languageData[lang].team.title;
  document.getElementById("milanDescLang").innerHTML =
    languageData[lang].team.memberDesc.milan;
  document.getElementById("nikolaDescLang").innerHTML =
    languageData[lang].team.memberDesc.nikola;
  document.getElementById("pavleDescLang").innerHTML =
    languageData[lang].team.memberDesc.pavle;
  document.getElementById("matejaDescLang").innerHTML =
    languageData[lang].team.memberDesc.mateja;

  document.getElementById("portfolioTitleLang").innerHTML =
    languageData[lang].portfolio.title;
  document.getElementById("contactTitleLang").innerHTML =
    languageData[lang].contact.title;

  document.getElementById("contactButtonLang").value =
    languageData[lang].button.send;
}
