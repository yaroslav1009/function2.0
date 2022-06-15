// 2.Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]

let button1 = document.querySelector('#task2');
button1.onclick = function() {
    let array = [1,2,3,4,5,6,7,8]
    let number = +prompt("Какой элемент удалить из массива?\n [1,2,3,4,5,6,7,8]")
    function removeElement(array, number){
        let indexNumber = array.findIndex((item) => item === number);
        if(indexNumber !== -1){
            array.splice(indexNumber,1);
            alert(array)
        }else{
            alert('Такого числа нет в массиве')
        }
    }
    removeElement(array, number)
}
