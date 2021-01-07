const button = document.getElementById("startGame");
const click = () => {
  document.getElementById("menuStart").style.display = "none";
  let conteinerDiv = document.getElementById("conteiner")
  conteinerDiv.style.display = "none";
};
button.addEventListener("click", click);
button.addEventListener("click", updateTimer)
