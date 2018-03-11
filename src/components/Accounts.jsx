import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';


export default class Accounts extends React.Component {

  drag = (e) => {
    this.props.createOperation({from: e.target.id, fromType: 'accounts' });
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    this.props.createOperation({to: e.target.id, toType: 'accounts' });
    //debugger;
    this.props.showModal();
  }


  render() {
    const { accounts } = this.props;
    //debugger;
    return (
        <div className='accounts'>
          { accounts.map(el => {
            return (
              <div className='account_element' 
                  onDragOver={this.allowDrop}
                  onDrop={this.drop}
                  key={_.uniqueId()}>
                <div className='account_element_sum'
                     draggable='true'
                     onDragStart={this.drag}
                     id={el.name}>
                  <Button bsStyle="warning" className="circle" id={el.name}>{el.sum} ₽</Button>
                </div>
                <div className='account_element_name'>{el.name}</div>
              </div>
            )
          })}
          <div className='account_element'>
            <div className='account_element_sum'>
              <Button bsStyle="warning" className="circle">+</Button>
            </div>
            <div className='account_element_name'>Add more...</div>
          </div>
        </div>
    )
  }
}