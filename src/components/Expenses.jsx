import React from 'react';

export default class Expenses extends React.Component {

  render() {
    //debugger;
    const { expenses } = this.props;
    return (
      <div className='expenses'>
        { expenses.map(el => {
          return (
            <div>
              <p>{el.name}</p>
              <p>{el.sum}</p>
            </div>
          )
        })}
        <hr />
      </div>
    )
  }
}