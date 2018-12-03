import React from 'react';
import { Button } from 'react-bootstrap';
import _ from 'lodash';


export default class Balance extends React.Component {

  showHistory = (e) => {
    e.preventDefault();
    this.props.showTransferHistory();
  }

  render() {
    const { balance } = this.props;
    return (
        <div className='accounts'>
          { balance.map(el => {
            return (
              <div className='account_element' 
                  key={_.uniqueId()}>
                <div className='account_element_sum'
                     id={el.name}>
                  <Button bsStyle="info" 
                          className="circle" 
                          id={el.name}
                          onClick={this.showHistory}>
                          {el.sum} ₽
                  </Button>
                </div>
                <div className='account_element_name'>{el.name}</div>
              </div>
            )
          })}
        </div>
    )
  }
}