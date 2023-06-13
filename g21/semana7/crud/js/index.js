'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const pokemonTBody = document.getElementById('pokemonTBody');
  const pokemonForm = document.forms['pokemonForm'];

  pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = pokemonForm['name'].value;
    const type = pokemonForm['type'].value;
    const image = pokemonForm['image'].value;

    pokemonTBody.innerHTML += `
      <tr>
        <td>n</td>
        <td>${name}</td>
        <td><span class="badge text-bg-danger">${type}</span></td>
        <td>
          <img src="${image}" alt="Charmander" width="32"
            height="32" />
        </td>
      </tr>
    `;

    pokemonForm.reset();
  });
});