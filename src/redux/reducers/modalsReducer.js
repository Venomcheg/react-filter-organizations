import {MODAL} from "../../constants";

let initialState = {
  addModal: false,
  deleteModal: false,
  modalItem: {},
}
export const modalsReducer = (state = initialState,action) => {
switch (action.type) {
  case MODAL.ADD:
    return {...state,addModal: !state.addModal}
  case MODAL.DELETESHOW:
    return {...state, deleteModal: true, modalItem: action.payload}
  case MODAL.DELETEHIDE:
    return {...state, deleteModal: false, modalItem: action.payload}
  default:
    return state
}
}