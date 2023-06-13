'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const pokemonTBody = document.getElementById('pokemonTBody');
  const pokemonForm = document.forms['pokemonForm'];

  let pokemons = [
    { name: 'Charmander', type: 'Fuego', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
    { name: 'Squirtle', type: 'Agua', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
    { name: 'Bulbasaur', type: 'Planta', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }
  ];

  pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = pokemonForm['name'].value;
    const type = pokemonForm['type'].value;
    const image = pokemonForm['image'].value;

    pokemons = [...pokemons, { name, type, image }];
    readPokemons();
    pokemonForm.reset();
  });

  const readPokemons = () => {
    pokemonTBody.innerHTML = '';

    pokemons.forEach((element, index) => {
      const { name, type, image } = element;

      pokemonTBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${name}</td>
          <td><span class="badge text-bg-primary">${type}</span></td>
          <td>
            <img src="${image}" alt="Charmander" width="32"
              height="32" />
          </td>
        </tr>
      `;
    });
  };

  readPokemons();
});