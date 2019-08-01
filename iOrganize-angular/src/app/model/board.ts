import {Group} from "../model/group"
import {Node} from "./node";

export class Board {
  id:number;
  name:string;
  groups:Group[];

  removeGroup(group: Group) {
    const index = this.groups.indexOf(group, 0);
    if (index > -1) {
      this.groups.splice(index, 1);
    }
  }
}
