async function fetchJson(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch {
    console.log(Error)
  }
}

export default fetchJson;