'use strict';

const word = [
    {
    word: '苦しいから逃げるのではない。逃げるから苦しくなるのだ。',
    peason: 'ウィリアム・ジェームズ（心理学者）'
    },
    {
    word: 'あなたは挑戦しては失敗する。 挑戦しては失敗する。挑戦しては失敗する、を繰り返す。しかし本当の失敗は、あなたが 挑戦することを辞めることだ。',
    person: 'ウォルト・ディズニー（アニメーター、ディズニー創立者）'
    },
    {
    word: '才能とは継続する情熱のことである。',
    person: 'モーパッサン（作家、劇作家）'
    },
    {
    word: 'インスピレーションを待っていたら 何もかけない。私は毎朝必ず作曲をする。そうすると神様がインスピレーションを 送ってくださるんだ。',
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

let random = 0;
let Done = [];

const randomFunc = () => {
    random = Math.floor(Math.random() * 7);
}

randomFunc();