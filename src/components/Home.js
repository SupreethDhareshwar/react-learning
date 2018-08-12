//src/components/Home.js
import React, { Component } from 'react';
import LeftArea from './LeftArea';
import RightArea from './RightArea';

export default class Home extends Component{
constructor(props){
  super(props)
  this.state={
    selectedRow : {}
 }
 this.getRowData=this.getRowData.bind(this);
}
  getRowData(obj){
  this.setState({
    'selectedRow':obj
  });
}  
render(){
  return(
    <div>
      <LeftArea sendRowData={ this.getRowData } />
      <RightArea selectedRow={this.state.selectedRow}/>
    </div>
  )
}
}


