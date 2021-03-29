import React, { Component } from 'react';
import TableItem from './TableItem';
import TableSort from './TableSort';
import * as action from '../actions/index';
import { connect } from 'react-redux';
import socketIO from 'socket.io-client';

class Table extends Component {
    
   componentDidMount(){
        this.props.getListAll();
        /*var socket = new WebSocket("ws://localhost:8080");
        socket.onopen = ()=>{
            console.log("Kết nối");
        }*/
    }
    render() {
        var {task} =  this.props;
        var element = task.map((value ,index) =>{
            return  <TableItem
                macp ={value.macp}
                giaTC ={value.giaTC}
            giaTran = {value.giaTran}
            giaSan = {value.giaSan}
            ktTong = {value.ktTong}
            giaMua3 = {value.giaMua3}
            klMua3 = {value.klMua3}
            giaMua2 = {value.giaMua2}
            klMua2 = {value.klMua2}
            giaMua1 = {value.giaMua1}
            klMua1 = {value.klMua1}  
            gia = {value.gia}
            kl = {value.kl}
            giaBan1 = {value.giaBan1}
            klBan1 ={value.klBan1}
            giaBan2 = {value.giaBan2}
            klBan2 = {value.klBan2}
            giaBan3 = {value.giaBan3}
            klBan3 = {value.klBan3}
            ></TableItem>
        })
        return (
        <div>
            <div className="stock-table">
              <div className="sticky-table-header-wrapper">
                    <TableSort></TableSort>
              </div>
              <table className="table-price proboard table-price-full" style={{"margin-top":"59px","margin-bottom":"13203px"}}>
                   {element}
                    
              </table>
            </div>
        </div>
        );
    }
}
const mapStateToProp =(state)=>{
    return  {
        task : state.task
    }
}
const mapDispatchToProp = (dispatch, props) =>{
    return {
        getListAll : ()=>{
            dispatch(action.fectchListAll())
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(Table);