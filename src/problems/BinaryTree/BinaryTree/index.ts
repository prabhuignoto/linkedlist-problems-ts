export default class BinaryTreeNode<T> {
  public parent: BinaryTreeNode<T> | null;
  public leftChild: BinaryTreeNode<T> | null;
  public rightChild: BinaryTreeNode<T> | null;

  constructor(public value: T | undefined) {
    this.parent = null;
    this.leftChild = null;
    this.rightChild = null;
    this.value = value;
  }

  setValue(value: T | undefined) {
    this.value = value;
  }

  get Left(): BinaryTreeNode<T> | null {
    if (this.leftChild) {
      return this.leftChild;
    } else {
      return null;
    }
  }

  get Right(): BinaryTreeNode<T> | null {
    if (this.rightChild) {
      return this.rightChild;
    } else {
      return null;
    }
  }

  setLeftChild(node: BinaryTreeNode<T>): BinaryTreeNode<T> | null {
    if (!node) {
      return null;
    }

    if (this.leftChild) {
      this.leftChild.parent = null;
    }

    this.leftChild = node;
    this.leftChild.parent = this;

    return this.leftChild;
  }

  setRightChild(node: BinaryTreeNode<T>): BinaryTreeNode<T> | null {
    if (!node) {
      return null;
    }

    if (this.rightChild) {
      this.rightChild.parent = null;
    }

    this.rightChild = node;
    this.rightChild.parent = this;

    return this.rightChild;
  }

  removeChild(node: BinaryTreeNode<T>): void {
    if (!node) {
      return;
    }

    if (this.leftChild && this.leftChild === node) {
      this.leftChild = null;
    }

    if (this.rightChild && this.rightChild === node) {
      this.rightChild = null;
    }
  }

  replaceChild(oldNode: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>): void {
    if (!oldNode && !newNode) {
      return;
    }

    if (this.leftChild && this.leftChild === oldNode) {
      this.leftChild = newNode;
    }

    if (this.rightChild && this.rightChild === oldNode) {
      this.rightChild = newNode;
    }
  }

  static Copy<T>(from: BinaryTreeNode<T>, to: BinaryTreeNode<T>) {
    to.value = from.value;
    to.leftChild = from.leftChild;
    to.rightChild = from.rightChild;
    to.parent = from.parent;
  }
}
