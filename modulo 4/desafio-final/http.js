import showError from './showError.js';

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      showError(response.status);
      throw new Error(response.status);
    }
  } catch (error) {
      console.log(error)
      throw new Error(error);
  }
}

export default fetchJson;