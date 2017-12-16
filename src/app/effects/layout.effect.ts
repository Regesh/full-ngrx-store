import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import {LayoutActionTypes} from '../actions/layout';
import { ConfigService } from '../services/config.service';

@Injectable()
export class LayoutEffects {
  // Listen for the 'openSideNav' action
  @Effect() openSideNav$: Observable<Action> = this.actions$.ofType(LayoutActionTypes.OpenSidenav)
        .mergeMap(action =>
        this._configService.load().then(data=>({ type: LayoutActionTypes.OpenSidenavSuccess, payload: data}))
        );
  constructor(
    private actions$: Actions,
    private _configService: ConfigService
  ) {}      
}