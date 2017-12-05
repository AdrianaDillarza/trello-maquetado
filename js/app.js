var testArray = [];
for(var i = 0; i<= 10; i +=1){
  //Agregar elementos al arreglo en la ultima posicion
 testArray.push(i);
  }
  console.log(testArray);
  //Eliminar el primer elemento al arreglo
  testArray.shift();
  console.log(testArray);
  //Eliminar el ultimo elemento del arreglo
  testArray.pop();
  console.log(testArray);
  //Revertir los elementos del arreglo
  testArray.reverse();
  console.log(testArray);

  //para obtener el string de una palabra
  var testString = "abcde";
  testString.charAt(2);
  //c
  //Para obtener un caracter a partir de su codigo ascii utilizo el metodo
  //String.fromCharcode
  //Para obetener el codigo ascii de un caracter utilizo string.charCodeAt(indice)
  var codigo = testString.charCodeAt(2);
  console.log(codigo);
  String.fromCharcode(codigo);
