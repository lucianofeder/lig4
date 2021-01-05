const button = document.getElementById("click");
const click = () => {
  if (button) {
    document.getElementById("menuStart").style.display = "none";
  }
};
addEventListener("click", click);
