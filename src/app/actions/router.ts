import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  pageLoaded = '[Router] PAGE LOADED'
}

export class PageLoaded implements Action {
  readonly type = RouterActionTypes.pageLoaded
}

export type LayoutActions = PageLoaded;