// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const newTreeNode = new TreeNode(val);

    if (!this.root) {
      this.root = newTreeNode;
      return;
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newTreeNode;
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newTreeNode;
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val === currentNode.val) {
        return true;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    console.log(currentNode.val);
    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left);
    }
    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right);
    }
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode.left) {
      this.inOrderTraversal(currentNode.left);
    }
    console.log(currentNode.val);
    if (currentNode.right) {
      this.inOrderTraversal(currentNode.right);
    }
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode.left) {
      this.postOrderTraversal(currentNode.left);
    }
    if (currentNode.right) {
      this.postOrderTraversal(currentNode.right);
    }
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [];
    stack.push(this.root);

    while (stack.length > 0) {
      let currentNode = stack.pop();
      console.log(currentNode.val);

      if (currentNode.left) {
        stack.push(currentNode.left);
      }

      if (currentNode.right) {
        stack.push(currentNode.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };