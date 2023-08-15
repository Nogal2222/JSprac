function dfs(graph, v, visited) {
    // 현재 노드를 방문 처리
    visited[v] = true;
    console.log(v);
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let i = 0; i < graph[v].length; i++) {
        let nextNode = graph[v][i]
        if (!visited[nextNode]) {
            dfs(graph, nextNode, visited)
        }
    }
}
const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
]

let visited = Array(9).fill(false);

dfs(graph, 1, visited);