import {Component, Input, OnInit,Renderer2, ViewChild, ElementRef} from '@angular/core';
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
  editTitle: boolean = false;
  @Input()
  group: Group;
  @Input()
  board: Board;
  @ViewChild('titleInput',{static:false}) groupTitleInput:ElementRef;

  constructor(private restService: RestService) {
  }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<Group>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.group.nodes, event.previousIndex, event.currentIndex);
      this.restService.updateGroup(this.group).subscribe();
    } else {
      transferArrayItem(event.previousContainer.data.nodes,
          this.group.nodes,
          event.previousIndex,
          event.currentIndex);
      this.restService.updateGroup(event.previousContainer.data).subscribe(data => {
        this.restService.updateGroup(this.group).subscribe();
      });
    }
  }

  showInput() {
    this.editTitle = true;
    setTimeout(() => {
      this.groupTitleInput.nativeElement.focus();
    }, 0);

  }

  onKeydown(event) {
    if (event.key === "Enter") {
     this.updateGroupTitle()
    }
  }

  updateGroupTitle(){
    this.editTitle = false;
    this.restService.updateGroup(this.group).subscribe();
  }
}
