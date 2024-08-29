const copy_mail = document.getElementById('copyMail') 
const select_about_me = document.getElementById('aboutMe')
const select_proyects = document.getElementById('proyects')
const select_cv = document.getElementById('cv')
const select_others = document.getElementById('others')
function copy(){
    console.log("yes");
    navigator.clipboard.writeText('hesan0308@gmail.com')
    alert('Texto copiado al portapapeles: hesan0308@gmail.com');
};
function display_about_me(){

};
function display_cv(){

};
function display_others(){

};
function display_proyects(){

};
copy_mail.addEventListener('click', copy);
select_about_me.addEventListener('click', display_about_me);
select_proyects.addEventListener('click', display_proyects);
select_cv.addEventListener('click', display_cv);
select_others.addEventListener('click', display_others);