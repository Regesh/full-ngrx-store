import { LayoutActionTypes, LayoutActions } from '../actions/layout';

export interface State {
  showSidenav: boolean;
  layoutData: any[]
}

const initialState: State = {
  showSidenav: false,
  layoutData: []
};

export function reducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case LayoutActionTypes.CloseSidenav:
      return {
        showSidenav: false,
      };
      case LayoutActionTypes.OpenSidenavSuccess:
      return Object.assign({},state,{
          layoutData:action.payload
      });
    case LayoutActionTypes.OpenSidenav:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getLayoutData = (state: State) => state.layoutData;