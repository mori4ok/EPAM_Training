import React from "react";
import ReactDOM from "react-dom";
import styles from './currency.css';
import moment from "moment";
import req from '../../services/req.js';

let Rates = [];
let firstDay = moment().startOf('month').format("YYYY-MM-DD");
let lastDay = moment().endOf('month').format("YYYY-MM-DD");

class Currency extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
      this.state = { 
        curAbbr: this.props.curAbbr,
        cur_rate: this.props.cur_rate,
        curChange: this.props.curChange,
        cur_id: this.props.cur_id,
        key:this.props.key,
  
      }
    }

    handleClick() {
      let cur_id = this.props.cur_id
      let url  = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/${cur_id}?startDate=${firstDay}&endDate=${lastDay}`;
      req(url)
        .then((res)=>{
          this.props.onSelectCur(res);
        })
        .catch((err)=>{console.log(err)})
    }

    render() {     
      return (
        <div className="currency" onClick={this.handleClick} cur_id={this.props.cur_id} key = {this.props.key} rates={this.props.rates}>
            <div className="currency__abbr">{this.state.curAbbr}</div>
            <div className="currency__rate">{this.state.cur_rate}</div>
            <div className={this.state.curChange > 0 ?"currency__change currency__change_up" :  "currency__change currency__change_low"}>{this.state.curChange}</div>
        </div>
      );
    }
};

export default Currency;
