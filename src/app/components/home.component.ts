import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/';
import { RouterActionTypes } from '../actions/router'; 
import 'rxjs/add/operator/delay';
@Component({
    selector:'home',
    template:`<h1>hello from home page`
}) 
export class HomeComponent{
    constructor(
        private _store: Store<fromRoot.State>,
        private _http: HttpClient){
        this._http.get('https://randomuser.me/api/?results=100')
        .delay(6000)
        .subscribe(data=>{
            this._store.dispatch({type: RouterActionTypes.pageLoaded, payload: data});
        })
    }
}