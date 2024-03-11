/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const minDepthHelper = (node) => {
      if (!node) return 0;
      if (node.children.length === 0) return 1;
      
      let minChildDepth = Infinity;
      for (let child of node.children) {
        minChildDepth = Math.min(minChildDepth, minDepthHelper(child));
      }
      return minChildDepth + 1;
    };
  
    return minDepthHelper(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const maxDepthHelper = (node) => {
      if (!node) return 0;
      if (node.children.length === 0) return 1;
      
      let maxChildDepth = -Infinity;
      for (let child of node.children) {
        maxChildDepth = Math.max(maxChildDepth, maxDepthHelper(child));
      }
      return maxChildDepth + 1;
    };
  
    return maxDepthHelper(this.root);
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const maxSumHelper = (node) => {
      if (!node) return 0;
      if (node.children.length === 0) return node.val;
      
      let maxChildSum = 0;
      for (let child of node.children) {
        maxChildSum = Math.max(maxChildSum, maxSumHelper(child));
      }
      return maxChildSum + node.val;
    };
  
    return maxSumHelper(this.root);
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const nextLargerHelper = (node, lowerBound) => {
      if (!node) return null;
      
      let minLarger = null;
      if (node.val > lowerBound) {
        minLarger = node.val;
      }
      
      for (let child of node.children) {
        const childLarger = nextLargerHelper(child, lowerBound);
        if (childLarger !== null && (minLarger === null || childLarger < minLarger)) {
          minLarger = childLarger;
        }
      }
      return minLarger;
    };
  
    return nextLargerHelper(this.root, lowerBound);
  }  
}

module.exports = { BinaryTree, BinaryTreeNode };
