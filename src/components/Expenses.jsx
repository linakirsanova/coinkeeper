import React from 'react';
import { Button } from 'react-bootstrap';


export default class Expenses extends React.Component {

  render() {
    //debugger;
    const { expenses } = this.props;
    return (
      <div className='expenses'>
        { expenses.map(el => {
          return (
            <div className='expense_element'>
              <div className='expense_element_sum'>
                <Button bsStyle="circle red">{el.sum}</Button>
              </div>
              <div className='expense_element_name'>{el.name}</div>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}