const regex = /[a-zA-Z]/g;
const user_word_input = document.getElementById('userWord');
const answer = document.getElementById('palindromeAnswer');
const btn_check = document.getElementById('bntCheckPalindrom');
let value='';
function valid_regex() {
/*this function deleat all speacial characters and spaces*/
    const user_word = user_word_input.value;
    value = user_word.match(regex)?.join('').toLowerCase() || '';
}
function reverse_answer(){
    reverse_value = value.split('').reverse().join('');
}
function compare_palindrome (){
    valid_regex();
    reverse_answer();
    if(reverse_value === value){
        answer.innerText =`La palabra ${value} es un palindromo`;
    }else  answer.innerText =`La palabra ${value} no es un palindromo`;
}
btn_check.addEventListener("click", compare_palindrome);