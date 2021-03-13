import {MODAL} from "../../constants";

export const addModal =() => (dispatch) => {
  dispatch({
    type: MODAL.ADD
  })
}
export const deleteModalShow = (item) => (dispatch,getState) => {
  let arrayy = getState().modalsReducer.modalItem
  arrayy = item
  dispatch({
    type: MODAL.DELETESHOW,
    payload: arrayy
  })
}
export const deleteModalHide = () => (dispatch,getState) => {
  let arrayy = getState().modalsReducer.modalItem
  arrayy = {}
  dispatch({
    type: MODAL.DELETEHIDE,
    payload: arrayy
  })
}
export const addPhone = (e) => (dispatch) => {
  const result = e.target.value
  dispatch({
    type: MODAL.PHONE,
    payload: result
  })
}
export const addAddress = (e) => (dispatch) => {
  const result = e.target.value
  dispatch({
    type: MODAL.ADDRESS,
    payload: result
  })
}