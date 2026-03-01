/** Find if Path Exists in Graph **/
/**There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
 * The edges in the graph are represented as a 2D integer array edges, 
 * where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
 * Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
 * 
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise. */

/*Example 1:
Grah is 0-><-1-><-2-><-0
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2 */
/**We are solving this question using dfs and bfs*/
function dfs(src, dest, graph, visited) {
    if (src === dest) return true;
    visited.add(src); /**Add the source node to visited it and now will go to neighbours*/
    let ans = false;
    for (const neighbour of graph[src]) {
        if (!visited.has(neighbour)) {
            ans = ans || dfs(neighbour, dest, graph, visited)
        }
    }
    return ans;
}

function validPath(n, edges, source, destination) {
    /**created the graph */
    const gr = new Array(n);
    for (let i = 0; i < n; i++) gr[i] = [];
    /**Populated the graph */
    edges.forEach(val => {
        gr[val[0]].push(val[1]);
        gr[val[1]].push(val[0]);
    });
    return dfs(source, destination, gr, new Set());
}

function bfs(src, dest, graph, visited) {
    if (src === dest) return true;
    const queue = [];
    queue.push(src);
    visited.add(src);
    while(!(queue.length===0)){
        const el = queue.shift();
        for(const neighbour of graph[el]){
            if(neighbour===dest) return true;
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                queue.push(neighbour);
            }
        }
    }
    return false
}

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));