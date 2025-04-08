function functionCalculation(a, b, x) {
    let result;

    if (x >= 0 && x < 1) {
        result = b * x ** 2 + x - 6;
    }

    if (x === 1) {
        let root = a * x + b;
       
    }

    if (root <= 0) {
        console.log("Помилка: підкореневий вираз недодатний");
    }

    if (root > 0){
        result = 1 / root;
    }

    if (x > 1 && x < 9) {
        result = Math.cos(x);
    }

    if (x < 0 && x >= 9) {
        console.log("Функція невизначена");
    }

    console.log(result);
}

functionCalculation(5, 1, 1);