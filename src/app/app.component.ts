import { Component, ChangeDetectionStrategy } from '@angular/core';
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
<button (click)="openMenu()">open menu</button>
<br/>
showNav: {{showNav$ | async}}
<br/>
layoutData: {{layoutData$ | async | json}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showNav$ = this._store.select(fromRoot.getShowSidenav);
  public layoutData$ = this._store.select(fromRoot.getLayoutData);
  constructor(
    private _store: Store<fromRoot.State>
  ){
    
  }
  openMenu(){
    this._store.dispatch(new layoutActions.OpenSidenav);
  }
}
