console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

fetchData();
