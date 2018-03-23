import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';
import * as moment from 'moment';


export default class Incomes extends React.Component {
  
  drag = (e) => {
    this.props.createOperation({from: e.target.id, fromType: 'incomes' });
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    const unixDate = moment(Date.now());
    const dayOfYear = Number(moment(unixDate).format('DDD'));
    this.props.createOperation({to: e.target.id, toType: 'incomes', unixDate, dayOfYear });
    this.props.showModal();
  }

  createElement = (e) => {
    e.preventDefault();
    this.props.createNewElement({ type: 'incomes' });
    this.props.showNewElementModal();
  }

  render() {
    //debugger;
    const { incomes } = this.props;
    return (
      <div className='incomes'>
        { incomes.map(el => {
          return (
            <div className='income_element'
                 onDragOver={this.allowDrop}
                 onDrop={this.drop}
                 key={_.uniqueId()}>
              <div className='income_element_sum'
                   draggable='true'
                   onDragStart={this.drag}
                   id={el.name}>
                <Button bsStyle='success' className="circle" id={el.name}>{el.sum} ₽</Button>
              </div>
              <div className='income_element_name'>{el.name}</div>
            </div>
          )
        })}
        <div className='income_element'>
          <div className='income_element_sum'>
            <Button bsStyle="success" className="circle" onClick={this.createElement}>+</Button>
          </div>
          <div className='income_element_name'>Add more...</div>
        </div>
      </div>
    )
  }
}