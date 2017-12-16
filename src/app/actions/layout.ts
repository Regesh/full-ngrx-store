import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  OpenSidenavSuccess = '[Layout] OPEN_SIDENAV_SUCCESS'
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class OpenSidenavSuccess implements Action {
  readonly type = LayoutActionTypes.OpenSidenavSuccess;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export type LayoutActions = OpenSidenav | CloseSidenav | OpenSidenavSuccess;