import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/';

@Injectable()
export class PageLoadGuard implements CanActivate{
  constructor(
      private _store:Store<fromRoot.State>
  ){}
  getFromStore():Observable<any> {
      return this._store.select(fromRoot.getLayoutData)
      .filter((data: any) => data.length)
      .take(1);
  }
  canActivate(): Observable<boolean> {
    return this.getFromStore()
      .switchMap(() => of(true))
      .catch(() => of(false));
  }
}