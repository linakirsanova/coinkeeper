import React from 'react';

export default class Incomes extends React.Component {

  render() {
    //debugger;
    const { incomes } = this.props;
    return (
      <div className='expenses'>
        { incomes.map(el => {
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