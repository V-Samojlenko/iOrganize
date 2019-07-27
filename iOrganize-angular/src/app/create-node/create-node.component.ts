import {Component, OnInit, Input} from '@angular/core';
import {Group} from "../model/group";
import {Node} from "../model/node";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {
  @Input()
  group: Group;
  @Input()
  node: Node;
  createOpen: boolean = false;
  private _restService: RestService;

  constructor(restService: RestService) {
    this._restService = restService;
    this.node = new Node();
  }

  ngOnInit() {
  }

  createNode() {
    this.node.groupId = this.group.id;
    this._restService.createNode(this.node).subscribe(data => this.group.nodes.push(data));
    this.node = new Node();
    this.createOpen = false;
  }

  createNodeCreate() {
    this.createOpen = true;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.createNode();
    }
  }
}
