// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
const shoppingList = [`pane`, `pasta`, `pomodoro`, `parmigiano`, `peperoni`, `zucchine`, `pollo`];

const ul = document.querySelector(`#list`);
let i = 0;
while (i < shoppingList.lenght){
    const item = document.createElement (`li`);
    item.classList.add(`list`);
    item.append(shoppingList[i]);
    ul.appendChild(item);
    i++
}