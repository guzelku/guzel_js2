'use strict';
/*функция проверки на число */
let isNum = function(n){

    return !isNaN(parseFloat(n))&& isFinite(n);
};

/*функция рандомное число */
let getRandomNum=function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min; //Максимум не включается, минимум включается
  }

  let randomNum = getRandomNum(1,100);// случайное число
    console.log(randomNum);


    function checkNumber(){
    
        
        const userNumber= prompt('Попробуй угадать число');//вводит пользователь
    
    
          if (isNum(userNumber)){//если  это число????????
            let repeat=false;
                      
            let num=+userNumber;//преобразуем в число
    
               if(num>randomNum){
                   alert('загаданное число меньше');
                   return checkNumber();//возвращается и запускается заново функция checkNumber
               }
               if(num < randomNum){
                alert('загаданное число больше');
                return checkNumber();
               }
               repeat= confirm('отлично, угадано ');
    
               console.log(repeat);
            }
                       
                    else{
                    if(userNumber !==null){
                        alert('введите число');
                        checkNumber()
                    }
            alert('пока');
          }
                  
        }


    
     let game=checkNumber();

     game;
