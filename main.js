let input1 = document.querySelector('#inputebi1');
let input2 = document.querySelector('#inputebi2');
let input3 = document.querySelector('#inputebi3');
let input4 = document.querySelector('#inputebi4');



let error1 = document.querySelector('.errorFirst');
let error2 = document.querySelector('.errorLast');
let error3 = document.querySelector('.errorEmail');
let error4 = document.querySelector('.errorFirst');

let btn = document.querySelector('.button');

btn.addEventListener('click', function () {
   inputValue1 = input1.value;
   inputValue2 = input2.value;
   inputValue3 = input3.value;
   inputValue4 = input4.value;

   

   if (inputValue1 === '') {
    error1.classList.remove('none');
    input1.style.borderColor = 'red';
   }
   else {
    error1.classList.add('none');
    input1.style.borderColor = 'green';
   }



//

if (inputValue2 === '') {
    error2.classList.remove('none');
    input2.style.borderColor = 'red';
   }
   else {
    error2.classList.add('none');
    input2.style.borderColor = 'green';
   }
   
})