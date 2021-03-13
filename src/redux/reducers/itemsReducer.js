import {ITEMS, MODAL} from "../../constants";
const initialState = {
  newItem:{
  }
}
export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS.GET:
      return {...state, items: action.payload}
    case ITEMS.ADD:
      return {...state, items:action.payload, newItem: {}}
    case ITEMS.DELETE:
      return {...state, items: action.payload}
    case MODAL.TEMPLATE:
      return {...state, newItem: action.payload}
    case MODAL.PHONE:
      return {...state,newItem: {...state.newItem, phone: [action.payload]}}
    case MODAL.ADDRESS:
      return {...state, newItem: {...state.newItem, address: action.payload}}
     default:
      return state
  }
}