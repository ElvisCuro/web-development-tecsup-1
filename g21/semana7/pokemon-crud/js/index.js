'use strict';

window.addEventListener('DOMContentLoaded', () => {
  let pokemons;

  const pokemonTBody = document.getElementById('pokemonTBody');
  const pokemonForm = document.forms['pokemonForm'];

  const createPokemon = (e) => {
    e.preventDefault();
    const name = pokemonForm['name'].value;
    const type = pokemonForm['type'].value;
    const image = pokemonForm['image'].value;

    pokemons = [...pokemons, { name, type, image }];
    localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
    readPokemons();
    pokemonForm.reset();
  };

  const readPokemons = () => {
    pokemonTBody.innerHTML = '';

    pokemons.forEach((element, index) => {
      const { name, type, image } = element;
      // pokemonTBody.innerHTML += `
      //   <tr>
      //     <td>${index + 1}</td>
      //     <td>${name}</td>
      //     <td><span class="badge text-bg-primary">${type}</span></td>
      //     <td>
      //       <img src="${image}" alt="${name}" width="32"
      //         height="32" />
      //     </td>
      //     <td>
      //       <button class="btn btn-outline-danger btn-sm" onClick=deletePokemon(${index})>❌</button>
      //     </td>
      //   </tr>
      // `;

      const tableRow = document.createElement('tr');

      const idTableData = document.createElement('td');
      idTableData.textContent = index + 1;

      const nameTableData = document.createElement('td');
      nameTableData.textContent = name;

      const typeTableDataT = document.createElement('td');
      typeTableDataT.textContent = type;

      const imageTableData = document.createElement('td');
      const imageImg = document.createElement('img');
      imageImg.setAttribute('src', image);
      imageImg.setAttribute('alt', name);
      imageImg.setAttribute('width', '64px');
      imageImg.setAttribute('height', '64px');
      imageTableData.appendChild(imageImg);

      const actionsTableData = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-outline-danger btn-sm';
      deleteButton.textContent = '🗑';
      deleteButton.addEventListener('click', () => deletePokemon(index))
      actionsTableData.appendChild(deleteButton);

      tableRow.appendChild(idTableData);
      tableRow.appendChild(nameTableData);
      tableRow.appendChild(typeTableDataT);
      tableRow.appendChild(imageTableData);
      tableRow.appendChild(actionsTableData);

      pokemonTBody.appendChild(tableRow);
    });
  };

  const deletePokemon = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No podrás recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, elimínalo!',
      cancelButtonText: 'No, cancélalo!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        pokemons = pokemons.filter((_, index) => index !== id);
        localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
        readPokemons();
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Tu Pokémon ha sido eliminado',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu Pokémon está seguro',
          'error'
        );
      }
    })
  };

  if (localStorage.getItem('pokemonsCrud')) {
    pokemons = JSON.parse(localStorage.getItem('pokemonsCrud'));
  } else {
    pokemons = [
      { name: 'Charmander', type: 'Fuego', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
      { name: 'Squirtle', type: 'Agua', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
      { name: 'Bulbasaur', type: 'Planta', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' }
    ];
    localStorage.setItem('pokemonsCrud', JSON.stringify(pokemons));
  }

  pokemonForm.addEventListener('submit', createPokemon);
  readPokemons();
});