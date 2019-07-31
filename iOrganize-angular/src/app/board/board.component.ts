import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Board} from '../model/board';
import {Node} from '../model/node';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Group} from "../model/group";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

@Injectable()
export class BoardComponent implements OnInit {
  public board: Board;
  private _restService: RestService;

  constructor(private restService: RestService) {
    this._restService = restService;
  }

  ngOnInit() {
    this.restService.getBoard(1).subscribe(data => this.board = data);
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
