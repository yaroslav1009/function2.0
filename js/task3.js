// 3.Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

let button2 = document.querySelector('#task3');
button2.onclick = function() {
    function generateKey(length, characters){
        let key = '';
        for(let i=0; i<length; i++){
            let randomNum = Math.floor(Math.random() * characters.length);
            key += characters[randomNum]
        }
        console.log(key)
    }
    generateKey(16, 'abcdefghijklmnopqrstuvwxyz0123456789')
}
