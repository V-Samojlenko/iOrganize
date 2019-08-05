import {Component, Input, OnInit} from '@angular/core';
import {Group} from "../model/group";
import {Board} from "../model/board";
import {RestService} from "../rest.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  group: Group;
  @Input()
  board: Board;

  constructor(public restService: RestService) {
  }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<Group>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.nodes, event.previousIndex, event.currentIndex);
      this.restService.updateGroup(event.previousContainer.data).subscribe();
    } else {
      transferArrayItem(event.previousContainer.data.nodes,
          event.container.data.nodes,
          event.previousIndex,
          event.currentIndex);
      this.restService.updateGroup(event.previousContainer.data).subscribe(data => {
        this.restService.updateGroup(event.container.data).subscribe();
      });
    }
  }

}
