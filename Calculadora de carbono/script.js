// Creamos el array con todos los valores en 0
var array = [0, 0, 0, 0, 0]

// Crear la función de la primera pregunta
function calculo1() {
  var valorInput1 = document.getElementById("input1").value;
  var resultado1 = valorInput1 * 1.33;
  var con2Decimales = resultado1.toFixed(2);
  array[0] = (parseFloat(con2Decimales))

  document.getElementById("spanResultado1").innerHTML = con2Decimales + " tCO2/año";
}


// Crear la función de la segunda pregunta
function calculo2() {
  var valorInput2 = document.getElementById("input2").value;
  var resultado2 = (valorInput2 * 0.00028) * 365;
  var con2Decimales = resultado2.toFixed(2);
  array[1] = (parseFloat(con2Decimales))

  document.getElementById("spanResultado2").innerHTML = con2Decimales + " tCO2/año";
}


// Crear la función de la tercera pregunta
function calculo3() {
  var valorInput3 = document.getElementById("input3").value;
  var resultado3 = (valorInput3 * 0.00108) * 365;
  var con2Decimales = resultado3.toFixed(2);
  array[2] = (parseFloat(con2Decimales))

  document.getElementById("spanResultado3").innerHTML = con2Decimales + " tCO2/año";
}


// Crear la función de la cuarta pregunta
function calculo4() {
  var valorInput4 = document.getElementById("input4").value;
  var resultado4 = valorInput4;
  array[3] = (parseFloat(resultado4))

  document.getElementById("spanResultado4").innerHTML = resultado4 + " tCO2/año";
}


// Crear la función de la quinta pregunta
function calculo5() {
  var valorInput5 = document.getElementById("input5").value;
  var resultado5 = (valorInput5 * 0.000486) * 12;
  var con2Decimales = resultado5.toFixed(2);
  array[4] = (parseFloat(con2Decimales))

  document.getElementById("spanResultado5").innerHTML = con2Decimales + " tCO2/año";
}


// Crear la función del Resultado Total
function calculoT() {
  var resultadoT = array[0] + array[1] + array[2] + array[3] + array[4];
  var con2Decimales = resultadoT.toFixed(2);

  document.getElementById("spanResultadoT").innerHTML = con2Decimales + " tCO2/año";
}