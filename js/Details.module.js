import { Ui } from "./Ui.module.js";

export class Details {
  constructor(id) {
    //
    this.details = document.querySelector(".btn-close");
    this.game = document.getElementById("game");
    this.details = document.getElementById("details");
    this.loaderDetails = document.getElementById("loaderDetails");

    //
    this.details.addEventListener("click", () => {
      this.game.classList.remove("d-none");
      this.details.classList.add("d-none");
    });

    this.getDetails(id);
  }

  async getDetails(id) {
    this.loaderDetails.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.loaderDetails.classList.add("d-none");

    new Ui().displayDetails(response);

    // console.log(response);
  }
}
