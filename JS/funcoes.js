function somar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = parseFloat(num1) + parseFloat(num2);
    localStorage.setItem('resultado',resultado);
    document.getElementById('resultado').value = resultado;
}

function subtrair(){
    let nun1 = document.getElementById('num1').value;
    let nun2 = document.getElementById('num2').value;
    let resultado = parseFloat(nun1) - parseFloat(nun2);

    localStorage.setItem('resultado', resultado);
    document.getElementById('resultado').value = resultado; 
}

function multiplicar(){
    let nun1 = document.getElementById('num1').value;
    let nun2 = document.getElementById('num2').value;
    let resultado = parseFloat(nun1) * parseFloat(nun2);
    localStorage.setItem('resultado',resultado);
    document.getElementById('resultado').value = resultado;
}

function dividir(){
    let nun1 = document.getElementById('num1').value;
    let nun2 = document.getElementById('num2').value;
    let resultado = 0;
    if (nun2<= 0){
        alert("nao pode dividir por zero ")
        document.getElementById('num2').value = 1;
    } else{
        resultado = parseFloat(nun1) / parseFloat(nun2);
    }
    localStorage.setItem('resultado',resultado);
    document.getElementById('resultado').value = resultado;
}
 
window.onload = function(){
    document.getElementById('resultado').value = localStorage.getItem('resultado');
    
}