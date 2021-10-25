const copy = document.querySelector('.copy');
const newbtn = document.querySelector('.newbtn');
const show = document.querySelector('.show');
let maxlen = document.querySelector('#mlength');


show.textContent = 'Password will be here';

const passwordChars = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMasdfghjklqwertyuiopzxcvbnm,./!@#$%^&*";

function randChar(){
    let lengthC = passwordChars.length;
    let index = (Math.trunc(Math.random()*lengthC));
    return passwordChars[index];
}

function generateRandom(){
    let maxlength = maxlen.value;

    // if(maxlen.value!=''){
        let finalPassword = '';
        for(let i=0;i<maxlength;i++){
            let char = randChar();
            finalPassword += char;
        }
    // }
    
    show.textContent = finalPassword;
}

newbtn.addEventListener('click',generateRandom);