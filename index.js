function appendValue(value){
    document.getElementById('display').value +=value;
}

function clearDisplay(){
    document.getElementById('display').value ='';
}

function deleteLast(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        let expression = document.getElementById('display').value.replace('%', '/100');
        document.getElementById('display').value = eval(expression);
    }
    catch{
        document.getElementById('display').value = 'Error';
    }
}