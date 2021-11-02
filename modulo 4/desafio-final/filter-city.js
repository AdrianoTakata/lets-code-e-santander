function filterCity(cityIn) {
  
  if (cityIn === "são paulo" || cityIn === "São Paulo" || cityIn === "são Paulo" || cityIn === "São paulo" ||
    cityIn === "sao paulo" || cityIn === "Sao Paulo" || cityIn === "sao Paulo" || cityIn === "Sao paulo" ||
    cityIn === "sp" || cityIn === "SP" || cityIn === "sP" || cityIn === "Sp") {
    return ["sao-paulo", "São Paulo"];
  }

  if (cityIn === "rio de janeiro" || cityIn === "Rio de janeiro" || cityIn === "rio De Janeiro" || cityIn === "rio de Janeiro" ||
    cityIn === "Rio de Janeiro" || cityIn === "Riode Janeiro" || cityIn === "rioDe Janeiro" || cityIn === "riode janeiro" ||
    cityIn === "rj" || cityIn === "Rj" || cityIn === "jR" || cityIn === "RJ") {
    return ["rio-de-janeiro", "Rio de Janeiro"];
  }

}
export default filterCity;