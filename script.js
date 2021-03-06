let data = [
  {
    img: "img/1.png",
    title: "Note App",
    url: "https://ng-note-app.netlify.app",
  },
  {
    img: "img/2.png",
    title: "Login - Register App",
    url: "https://login-register-ng.netlify.app",
  },
  {
    img: "img/3.png",
    title: "E-Trade",
    url: "https://etrade-ng.netlify.app",
  },
  {
    img: "img/4.png",
    title: "Etiya Crm Lite",
    url: "https://etiya-crm-lite.netlify.app",
  },
];

const cardSection = document.querySelector(".content");
const mobileMenuButton = document.querySelector(".nav-icon");
const mobileMenuItems = document.querySelector(".nav-desktop");
cardData(data);

mobileMenuButton.addEventListener("click", () => {
  if (mobileMenuItems.classList.value === "nav-desktop show") {
        mobileMenuItems.className = "nav-desktop";
  } else {
     mobileMenuItems.className = "nav-desktop show";
  }
});

function cardData(data) {
  for (let i = 0; i < data.length; i++) {
    cardSection.innerHTML += `<div class="card">
     <div class="card-img">
        <img src="${data[i].img}" alt="${data[i].title}">
        <span class="card-number">${i + 1}</span>
    </div>

    <h5 class="card-title">${data[i].title}</h5>
    <hr>

     <div class="card-footer">
        <a href="${
          data[i].url
        }" target="_blank" class="btn btn-primary">View</a>
      </div>
    </div>`;
  }
  return cardSection;
}
