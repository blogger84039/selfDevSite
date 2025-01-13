'use strict';

// 翻訳データの管理
const borrowTranslations = {
    ja: {
        title: "お借りしたもの",
        metaTitle: "お借りしたもの一覧",
        metaDescription: "自己啓発サイトの制作にあたって使用させていただいたツール等の一覧",
        honorific: "様", // 敬称
        intro: {
            part1: "当サイトを作成するにあたりまして、以下の",
            part2: "マークアップ言語及びプログラミング言語、",
            part3: "フレームワーク、ツールを活用させて",
            part4: "いただきました。",
            part5: "製作者様に感謝するとともに、最大の敬意を",
            part6: "払います。"
        },
        sections: {
            specialThanks: {
                title: "スペシャルサンクス",
                description: "当サイトは以下のアプリケーションからインスピレーションを得て作成いたしました。心より感謝申し上げます。",
                items: {
                    stayfree: {
                        name: "StayFree",
                        creator: "create: "
                    }
                }
            },
            markupLanguage: {
                title: "マークアップ言語",
                items: {
                    html: {
                        name: "HTML",
                        creator: "Create: ",
                        specification: "Specification formulation: "
                    },
                    css: {
                        name: "CSS",
                        creator: "Create: ",
                        specification: "Specification formulation: "
                    }
                }
            },
            programmingLanguage: {
                title: "プログラミング言語",
                items: {
                    javascript: {
                        name: "JavaScript",
                        creator: "Create: ",
                        specification: "Specification formulation: "
                    }
                }
            },
            framework: {
                title: "フレームワーク",
                items: {
                    bootstrap: {
                        name: "bootstrap",
                        creator: "Create: ",
                        specification: "Specification formulation: "
                    }
                }
            },
            tools: {
                title: "ツール",
                items: {
                    vscode: {
                        name: "Visual Studio Code",
                        creator: "Create: ",
                        specification: "Specification formulation: "
                    }
                }
            }
        }
    },
    en: {
        title: "Credits",
        metaTitle: "Credits List",
        metaDescription: "List of tools and resources used in creating this self-development site",
        honorific: "", // 英語では敬称なし
        intro: {
            part1: "In creating this site, ",
            part2: "we utilized the following markup languages, programming languages, ",
            part3: "frameworks, and tools. ",
            part4: "",
            part5: "We express our deepest gratitude and respect ",
            part6: "to their creators."
        },
        sections: {
            specialThanks: {
                title: "Special Thanks",
                description: "This site was inspired by the following application. We extend our heartfelt gratitude.",
                items: {
                    stayfree: {
                        name: "StayFree",
                        creator: "Created by: "
                    }
                }
            },
            markupLanguage: {
                title: "Markup Languages",
                items: {
                    html: {
                        name: "HTML",
                        creator: "Created by: ",
                        specification: "Specification by: "
                    },
                    css: {
                        name: "CSS",
                        creator: "Created by: ",
                        specification: "Specification by: "
                    }
                }
            },
            programmingLanguage: {
                title: "Programming Languages",
                items: {
                    javascript: {
                        name: "JavaScript",
                        creator: "Created by: ",
                        specification: "Specification by: "
                    }
                }
            },
            framework: {
                title: "Frameworks",
                items: {
                    bootstrap: {
                        name: "Bootstrap",
                        creator: "Created by: ",
                        specification: "Specification by: "
                    }
                }
            },
            tools: {
                title: "Tools",
                items: {
                    vscode: {
                        name: "Visual Studio Code",
                        creator: "Created by: ",
                        specification: "Specification by: "
                    }
                }
            }
        }
    }
};

// 言語切り替え機能の実装
document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.getElementById('selectLangBox');

    // 言語切り替えイベントの設定
    langSelect.addEventListener('change', function(e) {
        const selectedLang = e.target.value;
        updatePageContent(selectedLang);
        updateMetadata(selectedLang);
    });

    // 初期言語の設定
    const initialLang = 'ja';
    updatePageContent(initialLang);
    updateMetadata(initialLang);
});

// ページコンテンツの更新
function updatePageContent(lang) {
    const t = borrowTranslations[lang];

    // タイトルの更新
    document.querySelector('h1').textContent = t.title;

    // イントロ文の更新
    const introSpans = document.querySelectorAll('.license-intro span');
    introSpans[0].textContent = t.intro.part1;
    introSpans[1].textContent = t.intro.part2;
    introSpans[2].textContent = t.intro.part3;
    introSpans[3].textContent = t.intro.part4;
    introSpans[4].textContent = t.intro.part5;
    introSpans[5].textContent = t.intro.part6;

    // Special Thanks セクションの更新
    document.getElementById('specialThanks').textContent = t.sections.specialThanks.title;
    
    // description の更新（表示/非表示の切り替え）
    const description = document.getElementById('discription');
    if (t.sections.specialThanks.description) {
        description.style.display = 'block';
        description.textContent = t.sections.specialThanks.description;
    } else {
        description.style.display = 'none';
    }

    // リンクテキストの敬称更新
    updateHonorifics(t.honorific);

    // 各セクションの更新
    document.getElementById('specialThanks').textContent = t.sections.specialThanks.title;
    document.getElementById('discription').firstChild.textContent = t.sections.specialThanks.description;
    document.getElementById('markLanguage').textContent = t.sections.markupLanguage.title;
    document.getElementById('progLang').textContent = t.sections.programmingLanguage.title;
    document.getElementById('flame').textContent = t.sections.framework.title;
    document.getElementById('tool').textContent = t.sections.tools.title;

    // その他の要素も同様に更新...
}

// リンクテキストの敬称を更新する関数
function updateHonorifics(honorific) {
    // すべてのリンクを取得
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        const parentElement = link.parentElement;
        if (parentElement && parentElement.tagName === 'P') {
            // リンクのテキストから「様」を削除または追加
            let linkText = link.textContent;
            if (honorific) {
                // 「様」が既に含まれていない場合のみ追加
                if (!linkText.endsWith('様')) {
                    link.textContent = linkText + '様';
                }
            } else {
                // 「様」で終わる場合、削除
                if (linkText.endsWith('様')) {
                    link.textContent = linkText.slice(0, -1);
                }
            }
        }
    });
}

// メタデータの更新
function updateMetadata(lang) {
    const t = borrowTranslations[lang];

    // HTML lang属性の更新
    document.documentElement.lang = lang;

    // タイトルとメタ情報の更新
    document.title = t.metaTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', t.metaDescription);
    document.querySelector('meta[property="og:title"]').setAttribute('content', t.metaTitle);

    // 他のメタデータも必要に応じて更新
}