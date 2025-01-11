'use strict';

const wordList = [
    {
        word: '苦しいから逃げるのではない。逃げるから苦しくなるのだ。',
        person: 'ウィリアム・ジェームズ（心理学者）'
    },
    {
        word: 'あなたは挑戦しては失敗する。挑戦しては失敗する。挑戦しては失敗する、を繰り返す。しかし本当の失敗は、あなたが挑戦することを辞めることだ。',
        person: 'ウォルト・ディズニー（アニメーター、ディズニー創立者）'
    },
    {
        word: '才能とは継続する情熱のことである。',
        person: 'モーパッサン（作家、劇作家）'
    },
    {
        word: 'インスピレーションを待（ま）っていたら何もかけない。私は毎朝必ず作曲をする。そうすると神様がインスピレーションを送ってくださるんだ。',
        person: 'チャイコフスキー（作曲家）'
    },
    {
        word: 'あなたができると思えばできる。できないと思えばできない。',
        person: 'ヘンリー・フォード（フォード・モーター創設者）'
    },
    {
        word: '何事も80%ぐらいが一番ちょうどいい',
        person: 'オリジナル'
    }
];

const wordBox = document.getElementById('wordBox');
const word = document.getElementById('word');
const person = document.getElementById('person');
const input = document.getElementById('input');
const button = document.getElementById('button');
const BASE_PERSON_TEXT = '-\u00A0';

let counter = 0;
let random = 0;
let Done = [];

const randomFunc = () => {
    const available = Array.from({length: wordList.length}, (_, i) => i)
        .filter(num => !Done.includes(num));
    
    if (available.length === 0) {
        Done = [];
        return randomFunc();
    }
    
    const randomIndex = Math.floor(Math.random() * available.length);
    random = available[randomIndex];
    return random;
}

// タイマー処理を関数として切り出し
const setInputTimer = () => {
    if (random === 1 || random === 3) {
        setTimeout(() => {
            input.disabled = false;
        }, 8000);
    } else {
        setTimeout(() => {
            input.disabled = false;
        }, 5000);
    }
};

// 初期表示
random = randomFunc();
Done.push(random);
word.textContent = wordList[random].word;
person.textContent += wordList[random].person;

document.addEventListener('DOMContentLoaded', () => {
    setInputTimer();  // 初回表示時のタイマー設定
    input.addEventListener('keydown', enter);
});

const enter = (event) => {
    if (event.key === 'Enter') {
        input.blur();
    }
}

input.addEventListener('change', () => {
    if (input.value === wordList[random].word) {
        button.disabled = false;
    }
});

button.addEventListener('click', () => {
    random = randomFunc();
    Done.push(random);
    
    word.textContent = wordList[random].word;
    person.textContent = BASE_PERSON_TEXT + wordList[random].person; // 新しい内容を追加
    
    input.value = '';
    input.disabled = true;
    button.disabled = true;
    
    setInputTimer();  // ボタンクリック時にもタイマーを設定
    
    counter++;
});