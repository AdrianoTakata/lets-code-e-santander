import showError from './showError.js';

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
      showError();
      throw error;
  }
}

export default fetchJson;