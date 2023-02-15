const result = document.getElementById('result');
const input = document.getElementById('user-input');
const buttons = document.querySelector('.buttons');
const buttonsAll = buttons.querySelectorAll('button');

let lastKey;
let a=0,b=0,op,opBool=0,temp;


buttonsAll.forEach(function(bout){
    bout.addEventListener('click',(e) => interact(e.target));
});

document.addEventListener('keydown',function(e){
    temp = e.key.replace('*','x');
    temp = temp.replace('Enter','=');
    const key = buttons.querySelector(`button[value="${temp}"]`);
    interact(key)
});


function interact(keyy){
    
    if(lastKey == "="){
        input.textContent = "0";
        result.textContent = "";
    }

    if (/^[0-9]$/.test(keyy.value)) {
        if(input.textContent == "0")input.textContent = keyy.value;
        else input.textContent += keyy.value;
    }
    else if(keyy.id == "allclear"){
        input.textContent = "0";
        result.textContent = "";
        opBool = false;
        lastKey = "";
    }
    else if(keyy.id == "clear"){
        if(input.textContent.length == 1)input.textContent = "0";
        else{
            if(input.textContent[input.textContent.length-1] != " ")input.textContent = input.textContent.slice(0,-1);
            else {
                input.textContent = input.textContent.slice(0,-3);
                opBool = false;
            }
        }
    }
    else if( keyy.value == "%" || keyy.value == "x" || keyy.value == "+" || keyy.value == "-" || keyy.value == "/" ){
        if(opBool == false){
            input.textContent += ` ${keyy.value} `;
            opBool = true;
        }
        else{
            result.textContent = eval(input.textContent.replace('x','*'));
            input.textContent = result.textContent + ` ${keyy.value} `;
        }
    }
    else if(keyy.value == "="){
        if(1)result.textContent = eval(input.textContent.replace('x','*'));
    }
    lastKey = keyy.value;
}