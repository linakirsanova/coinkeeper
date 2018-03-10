import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';


export default class Expenses extends React.Component {
  
  drag = (e) => {
    //debugger;
    console.log(e.target.id);
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    //debugger;
    this.props.showModal();
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
                <Button bsStyle="danger" className="circle">{el.sum}</Button>
              </div>
              <div className='expense_element_name'>{el.name}</div>
            </div>
          )
        })}
        <div className='expense_element'>
          <div className='expense_element_sum'>
            <Button bsStyle="danger" className="circle">+</Button>
          </div>
          <div className='expense_element_name'>Add more...</div>
        </div>
      </div>
    )
  }
}