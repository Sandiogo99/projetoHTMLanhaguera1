function somar() {
    let num1 = document.getElemenByid("num1").value;
    let num2 = document.getElemenByid("num1").value;
    let resultado = parsefloat(num1) + parsefloat(num2);
    localstore.setItem("resultado",resultado);
    document.getElemenByid("resultado").value = resultado;
}

window.onload = function(){
    document.getElemenByid("resultado").value = localstorege.getItem("resultado");
}