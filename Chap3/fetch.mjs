const url = "https://pokeapi.co/api/v2/pokemon/ditto/";

const response = await fetch(url);

if (response.ok) {
  const result = await response.json();
  console.log(result);
} else {
  console.log("Failed to get anything");
}
