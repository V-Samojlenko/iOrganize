import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, Injectable} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {Subscription} from 'rxjs';
import {Group} from "../model/group";
import {Node} from "../model/node";
import {RestService} from "../rest.service";
import {Board} from "../model/board";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ContextMenuComponent implements OnInit {
  private _restService: RestService;
  sub: Subscription;
  @ViewChild('nodeMenu', {static: false}) nodeMenu: TemplateRef<any>;

  overlayRef: OverlayRef | null;

  constructor(private restService: RestService, public overlay: Overlay,
              public viewContainerRef: ViewContainerRef) {
    this._restService = restService;

  }

  ngOnInit() {
  }

  open({x, y}: MouseEvent, user) {
    this.close();
    const positionStrategy = this.overlay.position()
        .flexibleConnectedTo({x, y})
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          }
        ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    this.overlayRef.attach(new TemplatePortal(this.nodeMenu, this.viewContainerRef, {
      $implicit: user
    }));

  }

  close() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  deleteGroup(group: Group) {
    this._restService.deleteGroup(group).subscribe(result => {

    });
  }

  deleteNode(node: Node) {
    this._restService.deleteNode(node).subscribe(result => {

    });
  }
}
