import clearScreen from "./clearScreen.js";

function showError() {

  clearScreen();
  
  const div = document.querySelector(".right-side"); 
  const divError = document.createElement("div"); 
  divError.classList.add("container-cards")
  divError.classList.add('container-error');
  div.append(divError);

  const paragrah1 = document.createElement("p");
  paragrah1.innerText = "OOOOPS!"
  const paragrah2 = document.createElement("p");
  paragrah2.innerText = "ALGO DEU ERRADO NA SUA BUSCA."
  const paragrah3 = document.createElement("p");
  paragrah3.id = "error-red";
  paragrah3.innerText = "status 500";
  const paragrah4 = document.createElement("p");
  paragrah4.innerText = "POR FAVOR, TENTE NOVAMENTE!"

  divError.append(paragrah1, paragrah2, paragrah3, paragrah4);

}

export default showError;