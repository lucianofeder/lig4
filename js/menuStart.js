const button = document.getElementById("startGame");
const click = () => {
  document.getElementById("menuStart").style.display = "none";
  document.getElementById("conteiner").style.display = "none";
};
button.addEventListener("click", click);
