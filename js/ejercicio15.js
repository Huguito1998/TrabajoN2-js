
//Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Introduce una cadena de texto:");
let numchar = cadena.length;
cadena = cadena.toLocaleLowerCase();
let car;
let contador = 0;
let i;
for (i = 0; i < numchar; i++) 
{
  car = cadena.charAt(i);
  if (car == "a" || car == "e" || car == "i" || car == "o" || car == "u") 
  {
    contador++;
  }
}
document.write("Número de Vocales: " + contador + ".");
