let red = document.getElementById('first');
let orange = document.getElementById('second');
let green = document.getElementById('third');


function actionLight() {
let x = green.style.backgroundColor

    if (red.style.backgroundColor === '' && orange.style.backgroundColor === '' && green.style.backgroundColor === '') {
        red.style.backgroundColor = 'red'

    } else if (red.style.backgroundColor === 'red' && orange.style.backgroundColor === '' && green.style.backgroundColor === '') {
        orange.style.backgroundColor = 'orange'
    }else {
        green.style.backgroundColor = 'green'
        orange.style.backgroundColor = ''
        red.style.backgroundColor = ''
    }

    if (x === 'green'){
        green.style.backgroundColor =''
    }
   
    







}


