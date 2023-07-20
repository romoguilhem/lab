const elements = document.querySelectorAll(".free");
const cells = document.querySelectorAll(".cell");

elements.forEach((element) => {
  element.addEventListener("click", oneClick, {once: true});
});

function oneClick(event) {
  //choix du joueur
  const target = event.target;
  target.classList.remove("free");
  target.classList.add("cross");

  //checker si le joueur a gagné
  if (win("cross")) {
    //envoyer modale victory
    cells.forEach((cell) => {
      cell.classList.remove("free");
      cell.classList.remove("circle");
      cell.classList.add("cross");
    });
  };

  // "choix" de l'ordi
  const rest = document.querySelectorAll(".free");
  const index = Math.floor(Math.random() * rest.length);
  const circle = rest[index];
  circle.classList.remove("free");
  circle.classList.add("circle");
  circle.removeEventListener("click", oneClick);

  //checker si l'ordi a gagné
  if (win("circle")) {
    //envoyer modale defeat
    cells.forEach((cell) => {
      cell.classList.remove("free");
      cell.classList.remove("cross");
      cell.classList.add("circle");
    });
  };
};

function win(string) {
  const win = (cells[0].classList.contains(string) && cells[1].classList.contains(string) && cells[2].classList.contains(string)) || (cells[0].classList.contains(string) && cells[3].classList.contains(string) && cells[6].classList.contains(string)) || (cells[0].classList.contains(string) && cells[4].classList.contains(string) && cells[8].classList.contains(string)) ||(cells[1].classList.contains(string) && cells[4].classList.contains(string) && cells[7].classList.contains(string)) ||
  (cells[2].classList.contains(string) && cells[5].classList.contains(string) && cells[8].classList.contains(string)) ||
  (cells[2].classList.contains(string) && cells[4].classList.contains(string) && cells[6].classList.contains(string)) ||
  (cells[3].classList.contains(string) && cells[4].classList.contains(string) && cells[5].classList.contains(string)) || (cells[6].classList.contains(string) && cells[7].classList.contains(string) && cells[8].classList.contains(string));
  return win;
}
