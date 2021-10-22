const divContainer = document.createElement('div');
document.body.append(divContainer)

const spanSantander = document.createElement('span');
spanSantander.innerText = "SANTANDER CODERS";
spanSantander.classList.add("santander");

const spanRock = document.createElement('span');
spanRock.innerText = "ROCKS";
spanRock.classList.add("rock");

divContainer.append(spanSantander, " #809 ", spanRock)
