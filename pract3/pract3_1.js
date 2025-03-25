let a = 3;
let b = 15;

while (a !== b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a; 
    }
}

console.log(a);