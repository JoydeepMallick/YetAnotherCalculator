const display = document.getElementById('display');

function appendToDisplay(input){
    if(display.value == '0' || display.value == 'Error'){
        display.value = input;
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = '0';
}

function deleteLast(){
    display.value = display.value.slice(0, -1);//skip the last element in the string
    if(display.value == ''){//if all deleted
        display.value = '0';
    }
}

function calculate(){
    //eval is inbuilt function to evalution expression, risk of getting attacked if someone runs scripts
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}