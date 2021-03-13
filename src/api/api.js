import {url} from '../constants'

export const itemsAPI = {
 getItems() {
   return fetch(url).then(response => response.json())
  }
}