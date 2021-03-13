import React, {Component} from 'react';
import {connect} from "react-redux";
import TableItem from "./tableItem/tableItem";
import TableHead from "./tableHead/tableHead";
import AddModal from "../modals/addModal";
import DeleteModal from "../modals/deleteModal";
import './main.scss'
import {getCarts, getSearchSelector,getSearchText} from "../../redux/items-selectors";
class Main extends Component {

  render() {
  const [number,address,phone,manager,administrator,status,action]
  = ["№","Адрес","Телефон","Управляющий офиса","Администратор офиса", "Статус", "Действия"]

    return (
      <div>
        <table className={"main-table"}>
          <thead className={'main-table__head'}>
          <tr className={'main-table__row'}>
            <TableHead filter={number}/>
            <TableHead filter={address}/>
            <TableHead filter={phone}/>
            <TableHead filter={manager}/>
            <TableHead filter={administrator}/>
            <TableHead filter={status}/>
            <TableHead filter={action}/>
          </tr>
          </thead>
          <tbody>
          {this.props.items &&
          this.props.items.map((item,index) =>
            <TableItem key={item.id} index={index+1} item={item}/>)}
          </tbody>
        </table>
        {this.props.deleteModal && <DeleteModal/>}
        {this.props.addModal && <AddModal/>}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  const {deleteModal, addModal} = state.modalsReducer
  return {
    items: (getSearchText(state)
      ? getSearchSelector(state) : getCarts(state)),
    deleteModal,
    addModal
  }
}
export default connect(mapStateToProps,null)(Main);