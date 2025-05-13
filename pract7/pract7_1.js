let vertices = ['1', '2', '3', '4', '5', '6'];
let edges = [
    ['1', '2', 2],
    ['1', '3', 5],
    ['1', '5', 2],
    ['2', '1', 2],
    ['2', '3', 8],
    ['2', '4', 7],
    ['2', '5', 1],
    ['2', '6', 8],
    ['3', '1', 5],
    ['3', '2', 8],
    ['3', '6', 5],
    ['4', '2', 7],
    ['4', '5', 1],
    ['5', '1', 2],
    ['5', '2', 1],
    ['5', '4', 1],
    ['5', '6', 3],
    ['6', '2', 8],
    ['6', '3', 5],
    ['6', '5', 3],
]

function algorithm(vertices, edges, startNode) {
    let distances = {};
    let visited = {};
    let passed = {};

    for (let i of vertices) {
        distances[i] = Infinity;
        visited[i] = false;
        passed[i] = [];
    }

    distances[startNode] = 0;

    while (true) {
        let vertex = null;
        for (let v of vertices) {
            if (!visited[v] && (vertex === null || distances[v] < distances[vertex])) {
                vertex = v;
            }
        }
        if (vertex === null) {
            break;
        }

        visited[vertex] = true;

        for (let e of edges) {
            if (e[0] === vertex) {
                if (distances[vertex] + e[2] < distances[e[1]]) {
                    distances[e[1]] = distances[vertex] + e[2];
                    passed[e[1]] = vertex;
                    if (passed[vertex] != 0) {
                        passed[e[1]] = passed[vertex] + "; " + vertex;
                    }
                }
            }
        }
    }
    return { distances, passed };
}

let result = algorithm(vertices, edges, '6');
console.log(result.distances);
console.log(result.passed);