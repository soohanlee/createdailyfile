type Graph = { [node: string]: string[] };

const dfs = (
  graph: Graph,
  start: string,
  visited: Set<string> = new Set()
): void => {
  console.log(start); // 현재 노드 출력 (또는 다른 처리)
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
};
