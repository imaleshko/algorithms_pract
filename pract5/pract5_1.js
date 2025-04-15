function randomArray() {
    let array = [];
    for (let i = 0; i < 70; i++) {
        array.push(Math.floor(Math.random() * 51));
    }
    console.log(array)
    return array;
} 

function sortArray(array) {
    let n = array.length;
    for (let i = 1; i < n; i += 2) {
        let indexMin = i;
        for (let j = i + 2; j < n; j += 2) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        let replace = array[indexMin];
        array[indexMin] = array[i];
        array[i] = replace;
    }
    console.log(array);
}

function Main() {
    let array = randomArray();
    sortArray(array);
}

Main();