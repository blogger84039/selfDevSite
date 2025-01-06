'use strict';

let wordBox = document.getElementById('wordBox');

let random = 0;

const randomFunc = () => {
    random = Math.floor(Math.random() * 7);
}

randomFunc();