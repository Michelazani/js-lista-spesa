//? Data una lista della spesa, 
// ?stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// variabili comuni esterne ai cicli
// array
const groceryList = ['pasta', 'guanciale', 'uova', 'pecorino', 'pepe']; 

// inizializzare la variabile
let i = 0;

 //! ciclo FOR
 for (let i = 0 ; i < groceryList.length; i++){
    const createElement = document.createElement ('div');
    const elementFather = document.querySelector ('section');
    elementFather.appendChild (createElement);
    console.log (groceryList [i]); 
    createElement.innerHTML = groceryList[i];   
}






// //! ciclo WHILE

while (i < groceryList.length){
    const createElement = document.createElement ('div');
    const elementFather = document.querySelector ('section');
    elementFather.appendChild (createElement);
    console.log (groceryList [i]); 
    createElement.innerHTML = groceryList[i];
    // condizione di uscite
    i++;
}
