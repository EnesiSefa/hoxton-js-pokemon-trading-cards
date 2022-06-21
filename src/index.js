// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createPokemonCard(card) {
    let ulEl = document.querySelector(".cards");
  let liEl = document.createElement("li");
  liEl.className = "card";

  let h2El = document.createElement("h2");
  h2El.className = "card--title";
  h2El.textContent = "Bulbasaur";

  let imgEl = document.createElement("img");
  imgEl.className = "card--img";
  imgEl.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
  imgEl.width = 256;

  let ulEl2 = document.createElement("ul");
  ulEl2.className = "card--text";

  let liEl2 = document.createElement("li")
  liEl2.textContent = "HP: 45";
  let liEl3 = document.createElement("li")
  liEl3.textContent = "HP: 45";
  let liEl4 = document.createElement("li")
  liEl4.textContent = "DEFENSE: 49"
  let liEl5 = document.createElement("li")
  liEl5.textContent = "SPECIAL-ATTACK: 65"
  let liEl6 = document.createElement("li")
  liEl6.textContent = "SPECIAL-DEFENSE: 65"
  let liEl7 = document.createElement("li")
  liEl7.textContent ="SPEED: 45"
  

  // @ts-ignore

  liEl.append(h2El, imgEl,ulEl2);
  ulEl.append(liEl)
  ulEl2.append(liEl2,liEl3,liEl4,liEl5,liEl6,liEl7)
}

createPokemonCard();
createPokemonCard();
createPokemonCard();
createPokemonCard();
createPokemonCard();
createPokemonCard();
createPokemonCard();


// Tips
// - Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
// - Once you've got a card, think of a way to programmatically create all the others
// - Make sure you understand well the data structure before starting to create the cards
