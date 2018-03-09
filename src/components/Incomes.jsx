import React from 'react';
import { Button } from 'react-bootstrap';


export default class Incomes extends React.Component {

  render() {
    //debugger;
    const { incomes } = this.props;
    return (
      <div className='incomes'>
        { incomes.map(el => {
          return (
            <div className='income_element'>
              <div className='income_element_sum'>
                <Button bsStyle="circle green">{el.sum}</Button>
              </div>
              <div className='income_element_name'>{el.name}</div>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}