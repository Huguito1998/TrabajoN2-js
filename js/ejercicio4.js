//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


let suma = 0;

do 
{

    var numero = prompt("Introduce un numero");

    if (Number(numero) == numero) 
    {
        suma = suma + numero;
    }
    else 
    {
        if (numero != undefined) 
        {
            alert(numero + " No es un numero");
        }
    }
} 
while (numero != undefined);
document.write(suma);