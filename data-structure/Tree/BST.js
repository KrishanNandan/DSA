class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;  // The root of a binary search tree is initially null
    }

    //method to insert a new node
    insert(data) {
        const newNode = new Node(data);

        // If the tree is empty, the new node becomes the root
        if (this.root === null) {
            this.root = newNode;
        } else {
            // Otherwise, find the correct position for the new node
            this.insertNode(this.root, newNode);
        }
    }
    // Helper method to insert a new node
    insertNode(node, newNode) {
        // If the new node's data is less than the current node's data, go left
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                // If there is already a left child, recursively call insertNode
                this.insertNode(node.left, newNode);
            }
        }
        // If the new node's data is greater than the current node's data, go right
        else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                // If there is already a right child, recursively call insertNode
                this.insertNode(node.right, newNode);
            }
        }
    }
    // Helper method to search for a node
    search(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true; // Found the node
            }
            if (data < current.data) {
                current = current.left; // Go left
            } else {
                current = current.right; // Go right
            }
        }
        return false; // Value not found
    }
}