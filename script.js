class Node {
   constructor(data) {
      this.data = data;

      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insertNode(node, newNode) {
      if (newNode.data > node.data) {
         if (node.right === null) {
            node.right = newNode;
         }

         else {
            this.insertNode(node.right, newNode);
         }
      }

      else {
         if (node.left === null) {
            node.left = newNode;
         }

         else {
            this.insertNode(node.left, newNode);
         }
      }
   }

   insert(data) {
      let newNode = new Node(data);

      if (this.root === null) {
         this.root = newNode;
      }

      else {
         this.insertNode(this.root, newNode);
      }
   }

   inorder(node) {
      if (node) {
         this.inorder(node.left);
         ordered.push(node.data);
         this.inorder(node.right);
      }
   }

   preorder(node) {
      if (node) {
         console.log(node.data);
         this.preorder(node.left);
         this.preorder(node.right);
      }
   }

   postorder(node) {
      if (node) {
         this.postorder(node.left);
         this.postorder(node.right);
         console.log(node.data);
      }
   }

   findMinNode(node) {
      if (node.data === null) {
         return "Your request has been denied";
      }

      if (node.left === null) {
         return node;
      }

      else {
         let next = node.left;

         return this.findMinNode(next);
      }
   }

   getRootNode() {
      return this.root;
   }

   numberOfChildren(node) {
      let numbOfChildren = 0;

      if (node.right != null) {
         numbOfChildren++;
      }

      if (node.left != null) {
         numbOfChildren++;
      }

      return numbOfChildren;
   }

   removeNode(node, data) {
      let parent = null;
      let currentNode = node;

      while (currentNode != null && currentNode.data != data) {
         parent = currentNode;

         if (data < currentNode.data) {
            currentNode = currentNode.left;
         }

         else {
            currentNode = currentNode.right;
         }
      }

      if (currentNode === null) {
         return node;
      }

      let numbOfChildren = this.numberOfChildren(node);

      if (numbOfChildren === 0) {
         node.data = null;
         node.left = null;
         node.right = null;
      }

      else if (numbOfChildren === 1) {
         if (node.left == null) {
            node.data = node.right.data;
            node.right = node.right.right;
            node.left = node.right.left;
         }

         else if (node.right === null) {
            node.data = node.left.data;
            node.right = node.left.right;
            node.left = node.left.left;
         }
      }

      else {
         let minimumNode = this.findMinNode(currentNode.right);

         let value = minimumNode.data;

         this.remove(node, minimumNode.data);

         currentNode.data = value;
      }
   }

   remove(node, data) {

   }

   search(node, data) {
      if (node === null) {
         return "Your request has been denied";
      }

      else if (data > node.data) {
         return this.search(node.right, data);
      }

      else if (data < node.data) {
         return this.search(node.left, data);
      }

      else {
         return node;
      }
   }
}

let searchTree = new BinarySearchTree();

searchTree.insert(5);
searchTree.insert(7);
searchTree.insert(9);
searchTree.insert(2);
searchTree.insert(4);
searchTree.insert(6);
searchTree.insert(3);
searchTree.insert(10);
searchTree.insert(1);

searchTree.remove(searchTree.root, 5);

// console.log(searchTree);


// function to be implemented    
//* remove(data)
// Helper function    
// findMinNode()
// getRootNode()   
// inorder(node)
// preorder(node)                  
// postorder(node)    
// search(node, data)