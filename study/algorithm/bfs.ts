type Graph = { [node: string]: string[] };

const bfs = (graph: Graph, start: string): void => {
  const visited: Set<string> = new Set();
  const queue: string[] = [start];

  while (queue.length > 0) {
    const currentNode: string = queue.shift()!;
    console.log(currentNode); // 현재 노드 출력 (또는 다른 처리)
    visited.add(currentNode);

    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
};

const graph: Graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};

bfs(graph, "A");
