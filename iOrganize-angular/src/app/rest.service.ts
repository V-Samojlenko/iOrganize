import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Group} from "./model/group";
import {Observable} from 'rxjs/Observable';
import {Board} from "./model/board";
import {Node} from "./model/node";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _apiUrl: string = "http://localhost:8080/node-api/";
  private _httpClient: HttpClient;

  constructor(private http: HttpClient) {
    this._httpClient = http;
  }

  public getBoard(id: number): Observable<Board> {
    return this._httpClient.get<Board>(this._apiUrl + "board?id=" + id);
  }

  public updateBoard(board: Board): Observable<Group> {
    let ids = board.groups.map((n) => n.id);
    return this._httpClient.put<Group>(this._apiUrl + "board", {
      "id": board.id,
      "name": board.name,
      "groupIds": ids
    });
  }

  public updateGroup(group: Group): Observable<Group> {
    let ids = group.nodes.map((n) => n.id);
    return this._httpClient.put<Group>(this._apiUrl + "group", {
      "id": group.id,
      "name": group.name,
      "nodeIds": ids
    });
  }


  public createNode(node: Node): Observable<Node> {
    return this._httpClient.post<Node>(this._apiUrl + "node", node);
  }

  public deleteNode(node: Node): Observable<Node> {
    return this._httpClient.delete<Node>(this._apiUrl + "node?id=" + node.id);
  }

  public createGroup(group: Group): Observable<Group> {
    return this._httpClient.post<Group>(this._apiUrl + "group", group);
  }

  public deleteGroup(group: Group):Observable<Group> {
    return this._httpClient.delete<Group>(this._apiUrl + "group?id=" + group.id);
  }
}
