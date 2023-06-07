'use strict';

import { memes } from "../utils/memes.js";

document.addEventListener('DOMContentLoaded', () => {
  const memesBuscador = document.getElementById('memesBuscador');
  const memesMemeContainer = document.getElementById('memesMemeContainer');

  memesBuscador.addEventListener('input', (e) => {
    memesMemeContainer.innerHTML = '';

    if (e.target.value === '') {
      memesMemeContainer.innerHTML = '<h2 class="memes__title">Ingrese el nombre de su meme</h2>';
      return;
    }

    const memesBuscados = memes.filter(element => element.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));

    memesBuscados.forEach(element => {
      const { nombre, imagen, enlace } = element;
      memesMemeContainer.innerHTML += `
        <div class="memes__meme">
          <figure class="memes__meme-image-container">
            <img src="${imagen}" alt="${nombre}" class="memes__meme-image" />
          </figure>
          <h3 class="memes__meme-title">${nombre}</h3>
          <a href="${enlace}" class="memes__meme-button">Ver</a>
        </div>
      `;
    });
  });
});