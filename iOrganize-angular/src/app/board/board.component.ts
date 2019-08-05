import {Component, Injectable, OnInit} from '@angular/core';
import {Board} from '../model/board';
import {RestService} from "../rest.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<Board>) {
      moveItemInArray(this.board.groups, event.previousIndex, event.currentIndex);
      this.restService.updateBoard(this.board).subscribe();
  }
}
