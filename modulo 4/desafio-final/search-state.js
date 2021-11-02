function searchState(nameCity) {
  const cityState = [ {
    SP: ['São Paulo', 'Presidente Prudente', 'Santo André', 'São Carlos', 'Araraquara', 'Campinas'],
    RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis', 'Duque de Caxias', 'São Gonçalo', 'Macaé']
  }]

  const stateAbbreviate = Object.keys(cityState[0]);

  const stateName = stateAbbreviate.find( (state) => {
    const hereState = cityState[0][state].indexOf(nameCity);
    if ( hereState >= 0) {
      return state;
    }
  })
  return [stateName, stateName.toLowerCase()];
}

export default searchState;