import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';


export default class Accounts extends React.Component {

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
                  <Button bsStyle="warning" className="circle yellow">{el.sum}</Button>
                </div>
                <div className='account_element_name'>{el.name}</div>
              </div>
            )
          })}
        </div>
    )
  }
}