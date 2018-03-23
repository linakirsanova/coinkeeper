import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import * as moment from 'moment';


export default class Expenses extends React.Component {
  
  drag = (e) => {
    this.props.createOperation({from: e.target.id, fromType: 'expenses' });
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    const unixDate = moment(Date.now());
    const dayOfYear = Number(moment(unixDate).format('DDD'));
    this.props.createOperation({to: e.target.id, toType: 'expenses', unixDate, dayOfYear });
    this.props.showModal();
  }

  createElement = (e) => {
    e.preventDefault();
    this.props.createNewElement({ type: 'expenses' });
    this.props.showNewElementModal();
  }

  render() {
    //debugger;
    const { expenses } = this.props;
    return (
      <div className='expenses'>
        { expenses.map(el => {
          return (
            <div className='expense_element'
                 onDragOver={this.allowDrop}
                 onDrop={this.drop}
                 key={_.uniqueId()}>
              <div className='expense_element_sum'
                   draggable='true'
                   onDragStart={this.drag}
                   id={el.name}>
                <Button bsStyle="danger" className="circle" id={el.name}>{el.sum} ₽</Button>
              </div>
              <div className='expense_element_name'>{el.name}</div>
            </div>
          )
        })}
        <div className='expense_element'>
          <div className='expense_element_sum'>
            <Button bsStyle="danger" className="circle" onClick={this.createElement}>+</Button>
          </div>
          <div className='expense_element_name'>Add more...</div>
        </div>
      </div>
    )
  }
}