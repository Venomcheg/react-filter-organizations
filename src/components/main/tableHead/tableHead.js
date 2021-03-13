import React, {Component} from 'react';
import './tableHead.scss'
class TableHead extends Component {
  render() {

    return (
      <th>
        {this.props.filter}
      </th>
    );
  }
}

export default TableHead;