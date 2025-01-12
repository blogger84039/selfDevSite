'use strict';

const translations = {
    ja: {
        title: '自己啓発サイト',
        quoteTitle: '～名言～',
        inputPlaceholder: 'ここに名言を入力してください',
        selfDevButton: '自己啓発',
        credit: 'クレジット',
        createdBy: 'created by',
        quotes: [
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
        ],
        congratsMessage: 'おめでとうございます！全ての名言を入力完了しました！',
        resetButton: 'もう一度チャレンジ'
    },
    en: {
        title: 'Self-Development Site',
        quoteTitle: '~Quote~',
        inputPlaceholder: 'Please type the displayed quote...',
        selfDevButton: 'Develop',
        credit: 'Credit',
        createdBy: 'created by',
        quotes: [
            {
                word: "We do not run away because it is painful. It becomes painful because we run away.",
                person: "William James (Psychologist)"
            },
            {
                word: "You will challenge and fail, challenge and fail, challenge and fail, again and again. But the real failure is when you stop challenging.",
                person: "Walt Disney (Animator, Disney Founder)"
            },
            {
                word: "Talent is passion that persists.",
                person: "Guy de Maupassant (Writer, Playwright)"
            },
            {
                word: "If I waited for inspiration, I would never write anything. I compose every morning, and that's when God sends me inspiration.",
                person: "Pyotr Tchaikovsky (Composer)"
            },
            {
                word: "Whether you think you can, or you think you can't - you're right.",
                person: "Henry Ford (Ford Motor Company Founder)"
            },
            {
                word: "About 80% is just right for everything.",
                person: "Original"
            }
        ],
        congratsMessage: 'Congratulations! You have completed all quotes!',
        resetButton: 'Try Again'
    }
};

let selectedLang = 'ja';

// 言語切り替え機能の実装
document.getElementById('lang').addEventListener('change', function (e) {
    selectedLang = e.target.value;
    updateContent(selectedLang);
});

function updateContent(lang) {
    // タイトルの更新
    document.getElementById('title').textContent = translations[lang].title;

    // 名言エリアの更新
    document.querySelector('#wordBox #title').textContent = translations[lang].quoteTitle;

    // placeholder テキストの更新
    document.getElementById('input').placeholder = translations[lang].inputPlaceholder;

    // ボタンテキストの更新
    document.getElementById('button').textContent = translations[lang].selfDevButton;

    // クレジットの更新（"created by"は翻訳しない）
    document.getElementById('credit').firstChild.textContent = translations[lang].credit;

    // 現在表示中の名言を新しい言語で更新
    if (random !== undefined) {
        word.textContent = translations[lang].quotes[random].word;
        person.textContent = BASE_PERSON_TEXT + translations[lang].quotes[random].person;
    }
}

// translationsを言語に応じて切り替える
function gettranslations(lang) {
    return translations[lang].quotes;
}

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
    // translations[lang].quotes の長さを使用
    const quoteLength = translations[selectedLang].quotes.length;
    const available = Array.from({ length: quoteLength }, (_, i) => i)
        .filter(num => !Done.includes(num));

    // すべての名言が使用された場合
    if (available.length === 0) {
        Done = [];
        // 再帰せずに直接配列から選択
        const randomIndex = Math.floor(Math.random() * quoteLength);
        random = randomIndex;
        return random;
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

const checkAllQuotesCompleted = () => {
    return Done.length === translations[selectedLang].quotes.length;
};

const showCongratulations = () => {
    word.textContent = translations[selectedLang].congratsMessage;
    person.textContent = '';
    button.textContent = translations[selectedLang].resetButton;
    button.disabled = false;
    input.style.display = 'none'; // 入力欄を非表示
    button.style.width = '200px'; // ボタンの幅を調整

    button.onclick = () => {
        Done = [];
        counter = 0;
        button.textContent = translations[selectedLang].selfDevButton;
        button.style.width = '150px'; // 元の幅に戻す
        input.style.display = 'block'; // 入力欄を表示
        random = randomFunc();
        updateContent(selectedLang);
        input.disabled = true; // 一旦入力を無効化
        button.disabled = true; // ボタンも無効化
        setInputTimer(); // タイマーを設定
        button.onclick = null;
    };
};

// 初期表示
random = randomFunc();
Done.push(random);
word.textContent = translations[selectedLang].quotes[random].word;
person.textContent += translations[selectedLang].quotes[random].person;

document.addEventListener('DOMContentLoaded', () => {
    setInputTimer();  // 初回表示時のタイマー設定
    input.addEventListener('keydown', enter);

    wordArea.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + C
        if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
            if (e.target.id !== 'input') {  // 入力欄では通常通り使用可能
                e.preventDefault();
            }
        }

        // Ctrl/Cmd + A
        if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
            if (e.target.id !== 'input') {  // 入力欄では通常通り使用可能
                e.preventDefault();
            }
        }
    });

    // モバイルデバイスでの長押し選択を防止
    wordArea.addEventListener('touchstart', function (e) {
        if (e.target.id !== 'input') {
            e.preventDefault();
        }
    });

    // クリップボードへのコピーを監視
    document.addEventListener('copy', function (e) {
        if (e.target.id !== 'input') {
            e.preventDefault();
        }
    });
});

const enter = (event) => {
    if (event.key === 'Enter') {
        input.blur();
    }
}

input.addEventListener('change', () => {
    if (input.value === translations[selectedLang].quotes[random].word) {
        button.disabled = false;
    }
});

button.addEventListener('click', () => {
    random = randomFunc();
    Done.push(random);

    word.textContent = translations[selectedLang].quotes[random].word;
    person.textContent = BASE_PERSON_TEXT + translations[selectedLang].quotes[random].person; // 新しい内容を追加

    input.value = '';
    input.disabled = true;
    button.disabled = true;

    setInputTimer();  // ボタンクリック時にもタイマーを設定

    counter++;

    if (checkAllQuotesCompleted()) {
        showCongratulations();
    }
});