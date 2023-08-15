function bfs(graph, start, visited) {
    queue = [start];
    visited[start] = true;

    while (queue.length !== 0) {
        let v = queue.shift();
        console.log(v);

        for (let i = 0; i < graph[v].length; i++) {
            let nextNode = graph[v][i];
            if (!visited[nextNode]) {
                queue.push(nextNode);
                visited[nextNode] = true;
            }
        }
    }
}

graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

let visited = Array(9).fill(false);

bfs(graph, 1, visited);