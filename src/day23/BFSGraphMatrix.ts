export default function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    // get current
    const curr = q.shift() as number;
    // if curr === needle
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; ++i) {
      if (adjs[0] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[adjs[i]] = true;
      prev[adjs[i]] = curr;
      q.push(adjs[i]);
    }
    seen[curr] = true;
  } while (q.length);

  // build it backwards
}
