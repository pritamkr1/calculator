let screen = document.querySelector('#display');
let buttons = document.querySelectorAll('.btn');
//console.log(buttons);
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', function(e){
        //console.log(e.target.innerText);
        var innerValue = e.target.innerText;
       // console.log(innerValue);

        if(innerValue == 'x'){
           innerValue = '*' ;
           // console.log(innerValue);
           screenValue += innerValue;
            screen.value = screenValue;

        }else if (innerValue == 'C'){
            screenValue = "";
            screen.value = screenValue;

        }else if(innerValue == '='){
            screen.value = eval(screenValue);
           // console.log(screen.value);
        }else{
            screenValue += innerValue;
            screen.value = screenValue;
        }

    })
}