import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addModal} from "../../redux/actions/modalActions";
import {addSearchQuery} from "../../redux/actions/filterActions";
import './header.scss'
import {Button, Input} from "antd";

class Header extends Component {
  render() {
    return (
      <article className={'header'}>
        <h1 className={'title'}>Филиалы</h1>
        <div className={'header__wrapper'}>
          <div className={'header__input-wrapper'}>
            <Input className={"header__search"} placeholder="Поиск" value={this.props.searchText} onChange={(e)=> this.props.addSearchQuery(e)}  />
          </div>
          <Button onClick={this.props.addModal} className={'btn'}>Добавить</Button>
        </div>
      </article>
    );
  }
}
const mapStateToProps = (state) => ({
  searchText: state.filterReducer.searchText
})
export default connect(mapStateToProps,{addModal, addSearchQuery})(Header);