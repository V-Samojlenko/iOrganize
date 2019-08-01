import {Node} from "../model/node"

export class Group {
  id: number;
  name: string;
  nodes: Node[];
  boardId: number;

  removeNode(node: Node) {
    const index = this.nodes.indexOf(node, 0);
    if (index > -1) {
      this.nodes.splice(index, 1);
    }
  }
}
