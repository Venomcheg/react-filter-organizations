import {FILTER, ITEMS} from "../../constants";
import {itemsAPI} from "../../api/api";

export const addSearchQuery =  (e) =>  async (dispatch) => {

  const result = e.target.value


  dispatch({
    type: FILTER.ADDTEXT,
    payload: result
  })
}
