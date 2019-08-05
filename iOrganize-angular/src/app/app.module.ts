import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { CreateNodeComponent } from './create-node/create-node.component';
import { NodeComponent } from './node/node.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupComponent } from './group/group.component';

@NgModule({
  imports: [
    DragDropModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule,
    MatMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: BoardComponent },
    ])
  ],
  declarations: [

    AppComponent,
    HeaderComponent,
    BoardComponent,
    CreateNodeComponent,
    NodeComponent,
    CreateGroupComponent,
    GroupComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/