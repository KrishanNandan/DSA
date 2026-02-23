/**Using Adjency List or Map */
class Graph {
    constructor() {
        // We use a Map to store our Adjacency List
        // Key = Vertex, Value = Array of neighbors
        this.adjacencyList = new Map();
    }

    // Add a new node to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add a connection between two nodes
    addEdge(vertex1, vertex2) {
        // For an undirected graph, add to both lists
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    // Display the graph
    display() {
        for (let [vertex, neighbors] of this.adjacencyList) {
            console.log(`${vertex} ----> ${neighbors.join(", ")}`);
        }
    }
}

// --- Usage ---
const myGraph = new Graph();
// 1. Add Vertices
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

// 2. Add Edges (Connections)
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");

// 3. Visualize the output
myGraph.display();

/* 
Output in Console:
A ----> B, C
B ----> A, D
C ----> A
D ----> B
*/


/**Using Adjency Matrix*/
class GraphMat {
    constructor(noVertices) {
        this.v = noVertices;
        this.adjMat = new Array(this.v);
        for (let i = 0; i < this.v; i++) {
            this.adjMat[i] = new Array(this.v).fill(0);
        };
    }
    addEdge(v1, v2, biDir = true) {
        this.adjMat[v1][v2] = 1;
        if (biDir) {
            this.adjMat[v2][v1] = 1;
        }
    }

    display() {
        console.log(this.adjMat);
    }

}




//Shortcut way
let vert = 7;
const graph = new Array(vert);
for (let i = 0; i < vert; i++) graph[i] = [];
function addEdge(v1, v2, biDir = true) {
    graph[v1].push(v2);
    if (biDir) {
        graph[v2].push(v1);
    }
}