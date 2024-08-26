const copy_mail = document.getElementById('copyMail') 

function copy(){
    console.log("yes");
    navigator.clipboard.writeText('hesan0308@gmail.com')
    alert('Texto copiado al portapapeles: hesan0308@gmail.com');
};


copy_mail.addEventListener('click', copy);