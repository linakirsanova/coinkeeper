import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';


export default class Incomes extends React.Component {
  
  drag = (e) => {
    this.props.createOperation({from: e.target.id});
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    this.props.createOperation({to: e.target.id});
    this.props.showModal();
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
                <Button bsStyle='success' className="circle" id={el.name}>{el.sum}</Button>
              </div>
              <div className='income_element_name'>{el.name}</div>
            </div>
          )
        })}
        <div className='income_element'>
          <div className='income_element_sum'>
            <Button bsStyle="success" className="circle">+</Button>
          </div>
          <div className='income_element_name'>Add more...</div>
        </div>
      </div>
    )
  }
}