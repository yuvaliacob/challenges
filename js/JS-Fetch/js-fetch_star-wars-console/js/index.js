console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);

    for (let i = 0; i <= 5; i++) {
      console.log(data.results[i]);
      if (data.results[i].name === "R2-D2") {
        console.log(`The eye color of R2-D2 is: ${data.results[i].eye_color}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
