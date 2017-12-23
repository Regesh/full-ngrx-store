import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './reducers';
import * as layoutActions from './actions/layout';

interface AppState {
  counter: number
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <ul>
    <li><a routerLink='/'>home</a></li>
    <li><a routerLink='/second'>secondary</a></li>
  </ul>
<button (click)="openMenu()">open menu</button>
<br/>
showNav: {{showNav$ | async}}
<br/>
layoutData: {{layoutData | json}}
<br/>
routerOutlet:<br/>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public showNav$ = this._store.select(fromRoot.getShowSidenav);
  private layoutData$ = this._store.select(fromRoot.getLayoutData);
  public layoutData;
  constructor(
    private _store: Store<fromRoot.State>,
    private _ref: ChangeDetectorRef
  ){}
  ngOnInit(){
    this.layoutData$.subscribe((data)=>{
      this.layoutData = data;
      this._ref.detectChanges();
    });
  }
  openMenu(){
    this._store.dispatch(new layoutActions.OpenSidenav);
    this._ref.detectChanges();
  }
}
