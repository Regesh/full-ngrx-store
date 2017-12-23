import { RouterActionTypes } from '../actions/router';

export interface State {
  data:any[]
}

const initialState: State = {
  data: []
};

export function reducer(
  state: State = initialState,
  action: any
): State {
  switch (action.type) {
    case RouterActionTypes.pageLoaded:
    return {
        data: action.payload
    }
    default:
      return state;
  }
}

export const getPageData = (state: State) => state.data;