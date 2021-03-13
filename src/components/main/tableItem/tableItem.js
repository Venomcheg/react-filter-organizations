import React, {Component} from 'react';
import {connect} from 'react-redux'
import {deleteModalShow} from "../../../redux/actions/modalActions";
import './tableItem.scss'
class TableItem extends Component {

  render() {

    const {address, phone, manager, administrator, status} = this.props.item

    return (
      <tr className={'table-item'}>
        <td data-label={"№"}>
          {this.props.index}
        </td>
        <td data-label={"Адрес"} className={"table-item__address"}>
          {address}
          <p className={"table-item__city"}>Новосибирск</p>
        </td>
        <td data-label={"Телефон"}>
          {phone.map(number => <div>{number}</div>)}
        </td>
        <td data-label={"Управляющий офиса"}>
          {manager}
        </td>
        <td data-label={"Администратор офиса"}>
          {administrator}
        </td>
        <td data-label={"Статус"}>
          {status == "Активный" ?
            <div className={'table-item__status table-item__status--active'}>Активный</div>
            : <div className={'table-item__status table-item__status--unactive'}>Неактивный</div>}
        </td>
        <td data-label={"Действия"}>
          <button onClick={() => this.props.deleteModalShow(this.props.item)}
                  className={'close'}>
          </button>
        </td>
      </tr>
  )
    ;
  }
}

export default connect(null,{deleteModalShow})(TableItem);