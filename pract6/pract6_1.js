class TreeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

function addToTree(root, value) {
    if (root === null) {
        return new TreeNode(value);
    }

    if (value < root.value) {
        root.leftChild = addToTree(root.leftChild, value);
    }
    else if (value > root.value) {
        root.rightChild = addToTree(root.rightChild, value);
    }

    return root;
}

function createTree(array) {
    let root = null;

    for (let item of array) {
        root = addToTree(root, item);
    }

    return root;
}

function printTree(node, space = 0, indent = 4) {
    if (node === null) {
        return;
    }

    space += indent;
    printTree(node.rightChild, space);
    console.log(" ".repeat(space - indent) + node.value);
    printTree(node.leftChild, space);
}

let array = [5, 4, 3, 8, 7, 16, 14, 20, 49, 129];
let tree = createTree(array); 
printTree(tree)

function postOrder(node) {
    if (node) {
        postOrder(node.leftChild);
        postOrder(node.rightChild);
        console.log(node.value);
    }
}
postOrder(tree);

function countNode9(node) {
    if (node === null) {
        return 0;
    }

    let count = 0;

    if (node.value % 10 === 9) {
        count++;
    }

    count += countNode9(node.leftChild);
    count += countNode9(node.rightChild);

    return count;
}
let count = countNode9(tree);
console.log(`Кількість елементів, що закінчуються на 9: ${count}`);

function countEven(node) {
    if (node === null) {
        return 0;
    }

    let count = 0;

    if (node.value % 2 === 0) {
        count++;
    }

    count += countEven(node.leftChild);
    count += countEven(node.rightChild);
    
    return count;
}

function outputEven(node) {
    if (node === null) {
        return;
    }

    let leftEvenCount = countEven(node.leftChild);
    let rightEvenCount = countEven(node.rightChild);

    if (leftEvenCount === rightEvenCount && leftEvenCount != 0) {
        console.log(`У вузла ${node.value} кількість парних елементів в правому і лівому піддереві рівні`);
    }

    outputEven(node.leftChild);
    outputEven(node.rightChild);
}
outputEven(tree);