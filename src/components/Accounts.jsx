import React from 'react';
import { Button } from 'react-bootstrap';


export default class Accounts extends React.Component {

  render() {
    const { accounts } = this.props;
    //debugger;
    return (
      <div className='accounts'>
        { accounts.map(el => {
          return (
            <div className='account_element'>
              <div className='account_element_sum'>
                <Button bsStyle="circle yellow">{el.sum}</Button>
              </div>
              <div className='account_element_name'>{el.name}</div>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}