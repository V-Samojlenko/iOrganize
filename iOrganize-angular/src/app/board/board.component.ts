import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Board} from '../model/board';
import {Node} from '../model/node';
import {Observable} from 'rxjs/Observable';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Group} from "../model/group";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

@Injectable()
export class BoardComponent implements OnInit {
  private boardUrl: string;
  private apiUrl: string = "http://localhost:8080/node-api/";
  public board: Board;
  private httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit() {
    var boardObs: Observable<Board> = this.httpClient.get<Board>(this.apiUrl + "board");
    boardObs.subscribe(data => this.board = data);
  }

  drop(event: CdkDragDrop<Node[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      const newGroup = this.findGroup(event.previousContainer.id);
      if (newGroup != null) this.updateGroup(newGroup).subscribe();
    }
    let group: Group = this.findGroup(event.container.id);
    if (group != null) this.updateGroup(group).subscribe();
  }

  public updateGroup(group: Group): Observable<Group> {
    let ids = group.nodes.map((n) =>n.id);
    return this.httpClient.put<Group>(this.apiUrl + "group", {
      "id":group.id,
      "name":group.name,
      "nodeIds":ids
    });
  }


  public findGroup(id: String): Group {
    const cleanId = new Number(id.replace("group-", ""));
    return this.board.groups.find(function (group: Group) {
      return group.id == cleanId;
    });
  }
}
