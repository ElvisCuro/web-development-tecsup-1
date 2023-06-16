'use strict';

import header from './modules/header.js';
import loader from './modules/loader.js';

const documentReady = () => {
  loader();
  header();
};

document.addEventListener('DOMContentLoaded', documentReady);