const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if (!rootNode) {
    return null;
  }

  let currentNode = rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST (rootNode) {
  // Your code here
  if (!rootNode) {
    return null;
  }

  let currentNode = rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT (rootNode) {
  // Your code here
  if (!rootNode) {
    return Infinity;
  }

  let min = rootNode.val;
  let leftMin = findMinBT(rootNode.left);
  let rightMin = findMinBT(rootNode.right);
  return Math.min(min, leftMin, rightMin);
}

function findMaxBT (rootNode) {
  // Your code here
  if (!rootNode) {
    return -Infinity;
  }

  let max = rootNode.val;
  let leftMax = findMaxBT(rootNode.left);
  let rightMax = findMaxBT(rootNode.right);
  return Math.max(max, leftMax, rightMax);
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) {
    return -1;
  }

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function balancedTree (rootNode) {
  // Your code here
  if (!rootNode) {
    return true;
  }

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  let heightDiff = Math.abs(leftHeight - rightHeight);
  return heightDiff <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function countNodes (rootNode) {
  // Your code here
  if (!rootNode) {
    return 0;
  }

  return countNodes(rootNode.left) + countNodes(rootNode.right) + 1;
}

function getParentNode (rootNode, target) {
  // Your code here
  if (!rootNode) return undefined;
  if (rootNode.val === target) return null;

  let queue = [rootNode];
  while (queue.length > 0) {
    let current = queue.shift();
    if (
      (current.left && current.left.val === target) ||
      (current.right && current.right.val === target)
    ) {
      return current;
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let stack = [];
  let prev = null;
  let current = rootNode;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    if (current.val === target) {
      if (prev) return prev.val;
      return null;
    }

    prev = current;
    current = current.right;
  }

  return null;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

  if (!rootNode) return undefined;

  if (target < rootNode.val) {
    rootNode.left = deleteNodeBST(rootNode.left, target);
  } else if (target > rootNode.val) {
    rootNode.right = deleteNodeBST(rootNode.right, target);
  } else {
    // Node to delete found
    // Case 1: No children
    if (!rootNode.left && !rootNode.right) {
      return null;
    }
    // Case 2: One child
    if (!rootNode.left) {
      return rootNode.right;
    }
    if (!rootNode.right) {
      return rootNode.left;
    }
    // Case 3: Two children
    let temp = findMinNodeBST(rootNode.right);
    rootNode.val = temp.val;
    rootNode.right = deleteNodeBST(rootNode.right, temp.val);
  }

  return rootNode;
}

function deleteNodeBSTWrapper(rootNode, target) {
  const newRoot = deleteNodeBST(rootNode, target);
  return newRoot === rootNode ? undefined : newRoot;
}

function findMinNodeBST(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}


module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST : deleteNodeBSTWrapper
}