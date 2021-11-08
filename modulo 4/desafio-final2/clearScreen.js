function clearScreen() {
  
  const divMainCard = document.querySelector('.container-cards');
  if (divMainCard) divMainCard.remove();

  const buttonLowerLocate = document.querySelector('.button-lower-locate')
  if (buttonLowerLocate) buttonLowerLocate.remove();

  const divContainerUpper = document.querySelector('.container-upper')
  if (divContainerUpper) divContainerUpper.remove();

  const divContainerLowerNav = document.querySelector('.container-lower-nav')
  if (divContainerLowerNav) divContainerLowerNav.remove();
}

export default clearScreen;