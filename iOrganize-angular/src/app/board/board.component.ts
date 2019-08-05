import {Component, Injectable, OnInit} from '@angular/core';
import {Board} from '../model/board';
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

}
