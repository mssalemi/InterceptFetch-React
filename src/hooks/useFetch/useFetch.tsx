const URL = "http://localhost:3000/clients";

export function useFetch() {
  console.log("useFetch called");
  console.log("starting fetch");
  fetch(URL)
    .then((response) => {
      console.log("Data fetched");
      return response.json();
    })
    .then((data) => {
      console.log("Data parsed");
      console.log(data);
    });
}
