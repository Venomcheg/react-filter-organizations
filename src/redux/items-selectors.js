import {createSelector} from "reselect";

export const getCarts = (state) => {
  return state.itemsReducer.items
}

export const getSearchText = (state) => {
  return state.filterReducer.searchText
}

export const getSearchSelector = createSelector(getCarts, getSearchText,
(carts, searchText) => {

  const newArray = []
  carts.map(item => {
    let iterator = 0
    for (let key in item) {
      if(String(item[key]).includes(searchText)) {
        iterator++
      }
    }
    if (iterator) {
      newArray.push(item)
    }
  })

  return newArray
})

