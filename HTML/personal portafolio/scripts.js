const copy_mail = document.getElementById('copyMail') 
const select_about_me = document.getElementById('aboutMe')
const select_proyects = document.getElementById('proyects')
const select_cv = document.getElementById('cv')
const select_others = document.getElementById('others')
const section_about_me = document.getElementById('sectionAboutMe')
const section_proyects = document.getElementById('sectionProyects')   
const section_cv = document.getElementById('sectionCv') 
const section_others = document.getElementById('sectionOthers') 
function copy(){
    console.log("yes");
    navigator.clipboard.writeText('hesan0308@gmail.com')
    alert('Texto copiado al portapapeles: hesan0308@gmail.com');
};
function hiddeSections(){
    section_about_me.style.display = 'none';
    section_cv.style.display = 'none';
    section_others.style.display = 'none';
    section_proyects.style.display = 'none';
};
function display_about_me(){
    hiddeSections();
    section_about_me.style.display ='flex';
};
function display_cv(){
    hiddeSections();
    section_cv.style.display ='grid';
};
function display_others(){
    hiddeSections();
    section_others.style.display ='block';
};
function display_proyects(){
    hiddeSections();
    section_proyects.style.display ='block';
};

copy_mail.addEventListener('click', copy);
select_about_me.addEventListener('click', display_about_me);
select_proyects.addEventListener('click', display_proyects);
select_cv.addEventListener('click', display_cv);
select_others.addEventListener('click', display_others);