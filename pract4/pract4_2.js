function output(m) {
    let x_n;
    let numerator;
    let denominator;
    let error;

    if (m >= 1) {
        for (let n = 1; n <= m; n++) {
            numerator = Math.cos(n ** 2 - 5) + 4;
            denominator = 3 * n ** 2 + 1;
            if (denominator === 0) {
                error = "den = 0";
            }
            else {
                x_n = numerator / denominator;
                console.log(`x_${n} = ` + x_n)
            }
        }
    }
    else {
        error = "m < 1";
    }

    if (error) {
        switch (error) {
            case "m < 1":
                console.log("Помилка: m < 1");
                break;
            case "den = 0":
                console.log("Помилка: ділення на 0");
                break;
        }
    }
}

output(5)