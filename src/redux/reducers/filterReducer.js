import {FILTER} from "../../constants";

const initialState = {

  searchText: ""
}
export const filterReducer = (state=initialState, action) => {
  switch (action.type){
    case FILTER.ADDTEXT:
      return {...state, searchText: action.payload}
    default:
      return state
  }
}