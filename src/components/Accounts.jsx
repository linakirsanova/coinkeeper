import React from 'react';

export default class Accounts extends React.Component {

  render() {
    const { accounts } = this.props;
    //debugger;
    return (
      <div className='accounts'>
        { accounts.map(el => {
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