$(document).ready(inicio);
var numero1;
var numero2;

var lista_array = [];
function inicio() {
    var datos = localStorage.getItem("listaStorages");
    //localStorage.clear();
    $("button").click(calcular)
}
function calcular() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value; 
    resultadosuma= parseFloat(numero1)+parseFloat(numero2); 
    resultadosresta= parseFloat(numero1)-parseFloat(numero2);  
    resultadomultiplicacion= parseFloat(numero1)*parseFloat(numero2);  
        $("#operaciones").append("<div class='linea'>" 
        +" SUMA:  "+ resultadosuma + "<br>"
            +"RESTA:  "     +resultadosresta+ "<br>"
            +" MULTIPLICACION:  " +resultadomultiplicacion+ "</div>"
            );

    registrarStorage();
}
function registrarStorage() {
    var datos = lista_array.join("//");
    localStorage.setItem("listaStorages", datos);
    //alert(datos);
}