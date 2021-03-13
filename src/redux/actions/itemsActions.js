import {ITEMS, MODAL} from "../../constants";
import {itemsAPI} from "../../api/api";

export const getItems = () => async (dispatch) => {
  const response = await itemsAPI.getItems()
  dispatch({
    type: ITEMS.GET,
    payload: response
  })

  const templateItem = Object.assign({},response[0])
  for(let key in templateItem) {
    templateItem[key] = ""
  }

  dispatch({
    type: MODAL.TEMPLATE,
    payload: templateItem
  })
}
export const deleteItem = (row) => (dispatch, getState) => {
  const items = getState().itemsReducer.items.slice()

  const result = items.filter(item => item.id !== row.id)
  dispatch({
    type: ITEMS.DELETE,
    payload: result
  })
  dispatch({
    type: MODAL.DELETEHIDE
  })
}
export const addItem = (e) => (dispatch,getState) => {
  e.preventDefault()
  const newState = getState().itemsReducer.items.slice()
  const newRow = getState().itemsReducer.newItem
  newRow.id = Date.now().toString()
  newState.push(newRow)
  dispatch({
    type: ITEMS.ADD,
    payload:newState
  })
  dispatch({
    type: MODAL.ADD
  })

}