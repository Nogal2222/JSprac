// 최소 신장트리
// 틀정 원소가 속한 집합 찾기
function findParent(parent, x) {
    // 루트 노드가 아니라면, 루트 노드 찾을 때까지 재귀적 호출
    if (parent[x] != x) {
        parent[x] = findParent(parent, parent[x])
    }
    return parent[x];
}

// 두 원소가 속한 집합을 합치기
function unionParent(parent, a, b) {
    a = findParent(parent, a);
    b = findParent(parent, b);

    a < b ? parent[b] = a : parent[a] = b;
}

const fs = require("fs");
const filePath = "kruskal_algorithm.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.replace('\r', ''));

const [v, e] = input[0].split(' ').map(Number);
let parent = Array(v + 1).fill(0);

// 모든 간선을 담을 리스트와 최종 비용을 담을 변수
let edges = [];
let result = 0;

// 부모 테이블 상에서, 부모를 자기 자신으로 초기화;
for (let i = 1; i <= v; i++) {
    parent[i] = i
}

// 모든 간선 정보 받기
for (let i = 1; i < e; i++) {
    let [a, b, cost] = input[i].split(' ').map(Number);
    edges.push([cost, a, b]);
}

// 간선 비용순 정렬
edges.sort((a, b) => a[0] - b[0]);

// 간선 하나씩 확인
for (edge of edges) {
    let [cost, a, b] = edge;

    // 싸이클이 발생하지 않을 조건 (부모가 같지 않을 것)에만 집합에 포함
    if (findParent(parent, a) != findParent(parent, b)) {
        unionParent(parent, a, b);
        result += cost;
    }
}

console.log(result);