import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import _ from 'lodash';
import * as moment from 'moment';

export default class TransferHistoryModal extends React.Component {

    getHistory = (arr) => {
        const sortedObject = arr.sort((a, b) => a.dayOfYear - b.dayOfYear)
        .reduce((acc, transfer) => {
            if (Object.keys(acc).includes(`${transfer.dayOfYear}`)) {
                const newHistoryOfTheDay = {[transfer.dayOfYear]: [...acc[transfer.dayOfYear], transfer ]};
                return { ...acc, ...newHistoryOfTheDay };
            }

            else {
                return {...acc, [transfer.dayOfYear]: [ transfer ] };
            }
        }, {});
        return sortedObject;

    }

    makeHistory() {
        const sorted = this.getHistory(this.props.transfers);
        return (        
            Object.keys(sorted).map(el => {
                const date = moment().dayOfYear(Number(el)).format('MMMM Do YYYY');
                return (
                    <div className="panel panel-default" key={_.uniqueId()}>
                        <div className="panel-heading">{date}</div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>from</th>
                                    <th>to</th> 
                                    <th>sum</th>
                                    <th>time</th>
                                </tr>
                            </thead>
                            <tbody>
                                { sorted[el].map(tr => {
                                    const { from, to, sum, unixDate } = tr;
                                    const time = moment(unixDate).format('k:mm');
                                    return (
                                        <tr key={_.uniqueId()}>
                                            <td width="25%">{from}</td>
                                            <td width="25%">{to}</td> 
                                            <td width="25%">{sum} ₽</td>
                                            <td width="25%">{time}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })
        )
    }
                
    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.showHistory}>
                    <Modal.Header>
                        <Modal.Title> History </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div>
                        { this.makeHistory() }   
                        
                    </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.showTransferHistory}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}