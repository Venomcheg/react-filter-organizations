export const url = "data.json"

const items = 'ITEM_'
const modal = 'MODAL_'
const filter = "FILTER_"
export const ITEMS = {
  GET:`${items}GET`,
  DELETE:`${items}DELETE`,
  ADD:`${items}ADD`
}
export const MODAL = {
  ADD:`${modal}ADD`,
  DELETESHOW:`${modal}DELETESHOW`,
  DELETEHIDE:`${modal}DELETEHIDE`,
  TEMPLATE: `${modal}TEMPLATE`,
  PHONE: `${modal}PHONE`,
  ADDRESS: `${modal}ADDRESS`
}
export const FILTER = {
  ADDTEXT: `${filter}ADDTEXT`,
}