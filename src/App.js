import React from 'react'
import {getItems} from "./redux/actions/itemsActions";
import 'antd/dist/antd.css'
import './App.scss'
import {connect} from "react-redux";
import Main from "./components/main/main";
import Header from "./components/header/header";


class App extends React.Component {

  componentDidMount() {
  this.props.getItems()
  }
  render() {
    return (
      <main className={'wrapper'}>
        <div className={'container'}>
          <Header/>
          <Main/>
        </div>
      </main>
    );
  }
}

export default connect(null,{getItems})(App);
