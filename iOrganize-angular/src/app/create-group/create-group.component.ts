import {Component, OnInit, Input} from '@angular/core';
import {Group} from "../model/group";
import {Board} from "../model/board";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  @Input()
  group: Group;
  @Input()
  board: Board;
  createOpen: boolean = false;
  private _restService: RestService;

  constructor(restService: RestService) {
    this._restService = restService;
    this.group = new Group();
  }

  ngOnInit() {
  }

  createGroup() {
    this.group.boardId = this.board.id;
    this._restService.createGroup(this.group).subscribe(data => this.board.groups.push(data));
    this.group = new Group();
    this.createOpen = false;
  }

  createGroupCreate() {
    this.createOpen = true;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.createGroup();
    }
  }

}
