import { Ui } from "./Ui.module.js";
import { Details } from "./details.module.js";

// active link from Nav Bar
export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeLinkToActive(link);
        const getGregory = link.dataset.category;
        this.getGames(getGregory);
      });
    });
    this.Ui = new Ui();
    this.getGames("MMORPG");
    this.game = document.getElementById("game");
    this.details = document.getElementById("details");
  }

  async changeLinkToActive(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  // get Data
  async getGames(cat) {
    // loader
    const loading = document.querySelector(".loader");
    const displayData = document.getElementById("displayData");
    displayData.classList.add("d-none");
    loading.classList.remove("d-none");

    // options
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a7658ba79amsh49e823cfe48569ep169b72jsnfd871b6219c1",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    // call Api
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();
    loading.classList.add("d-none");
    displayData.classList.remove("d-none");

    this.Ui.displayGame(response);
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.game.classList.add("d-none");
        this.details.classList.remove("d-none");
        new Details(card.dataset.id);
      });
    });
    // console.log(response)
  }
}
