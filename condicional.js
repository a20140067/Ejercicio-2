alert("Bienvenido a la pagina de Javascript, Toda respuesta debe ser en mayuscula")
var nom= prompt("Ingrese su Nombre y Apellido")
var res1 = prompt("Como se llama el primer dia de la Primavera?\nA: Primer dia de la primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno")
if(res1=="B"){
    res1 = 25;
}else{
    res1 = 0;
}
var res2 = prompt("Que sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininrerrumpida\nB: 6 meses de oscuridad ininterrumpida\nC: 6 meses de alternancia de luz y oscuridad")
if(res2=="A"){
    res2 = 25;
}else{
    res2 = 0;
}
var res3 = prompt("En que mes empieza la Primavera en el Hemisferio norte?\nA: Setiembre\nB: Junio\nC: Marzo")
if(res3=="C"){
    res3 = 25;
}else{
    res3 = 0;
}
var res4 = prompt("Que es la Fiesta de la Primavera en China?\nA: La navidad\nB: El año nuevo\nC: Fiestas Patrias de China")
if(res4=="C"){
    res4 = 25;
}else{
    res4 = 0;
}
var total= res1 + res2 + res3 + res4
document.write("<h1>Condicionales</h1>")
document.write("Respuestas <br>")
document.write(nom + " Tus resultados son <br>")
document.write(total + "% de respuestas correctas")
