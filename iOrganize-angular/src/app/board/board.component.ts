import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Board } from '../model/board';
import { Node } from '../model/node';
import { Observable } from 'rxjs/Observable';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

@Injectable()
export class BoardComponent implements OnInit {
  private boardUrl:string;
  private apiUrl:string = "http://localhost:8080/node-api/";
  public board:Board;
  private httpClient:HttpClient;

  constructor(private http:HttpClient) {
    this.httpClient = http;
  }

  ngOnInit() {
    var boardObs:Observable<Board> = this.httpClient.get<Board>(this.apiUrl + "board");
    boardObs.subscribe(data => this.board = data);
  }

  drop(event:CdkDragDrop<Node[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

}
