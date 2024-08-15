const regex = /[a-zA-Z]/g;
const user_word_input = document.getElementById('userWord');
const answer = document.getElementById('palindromeAnswer');
const btn_check = document.getElementById('bntCheckPalindrom');

function validregex() {
    const user_word = user_word_input.value;
    const value = user_word.match(regex)?.join('') || '';
    answer.innerText = value;
}

btn_check.addEventListener("click", validregex);