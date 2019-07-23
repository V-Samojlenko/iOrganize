import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Board } from '../model/board';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

@Injectable()
export class BoardComponent implements OnInit {
  private boardUrl:string;
  public board:Board;
  private httpClient:HttpClient;

  constructor(private http:HttpClient) {
    this.httpClient = http;
  }

  ngOnInit() {
    this.boardUrl = 'http://localhost:8080/node-api/get-board';
    var boardObs:Observable<Board> = this.httpClient.get<Board>(this.boardUrl);
    boardObs.subscribe(data => this.board = data);
  }

}
