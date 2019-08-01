import {Component, OnInit, Input} from '@angular/core';
import {Node} from "../model/node";
import {RestService} from "../rest.service";
import {Group} from "../model/group";
import {ContextMenuComponent} from "../context-menu/context-menu.component";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})

export class NodeComponent implements OnInit {
  @Input()
  node: Node;
  @Input()
  group: Group;
  private _restService: RestService;

  constructor(restService: RestService, public menu: ContextMenuComponent) {
    this._restService = restService;
  }

  ngOnInit() {
  }

  delete() {
    this._restService.deleteNode(this.node).subscribe(data => {
      this.group.removeNode(this.node);
    });
  }

  openMenu($event: MouseEvent) {
    this.menu.open($event, this.node);
  }
}
