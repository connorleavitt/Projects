const connor = fetch(`
https://bobsburgers-api.herokuapp.com/characters/95`)
  .then((res) => res.json())
  .then((data) => console.log(data.image));
