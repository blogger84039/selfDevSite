'use strict';

import { word as wordList } from './Js/wordList.js';

let wordBox = document.getElementById('wordBox');

let random = 0;

const randomFunc = () => {
    random = Math.floor(Math.random() * 7);
}

randomFunc();