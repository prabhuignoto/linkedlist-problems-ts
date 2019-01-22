import { LinkedListNode } from "../Linkedlist/index";
import LinkedList from "../Linkedlist";

type Node<U> = LinkedListNode<U> | null;

export default function GetLength<U>(List: LinkedList<U>) {
  let startNode: Node<U> = List.head;
  let nodeCount = 0;

  // visit every node and increment the nodecount
  while (startNode) {
    nodeCount += 1;
    if (startNode.next) {
      startNode = startNode.next;
    } else {
      startNode = null;
    }
  }

  return nodeCount;
}
