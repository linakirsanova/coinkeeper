import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import _ from 'lodash';

export default class ShowModal extends React.Component {
    
    handleSumChange = e => this.props.createOperation({ sum: e.target.value });

    handleSubmit = e => {
        console.log(this.props.operation);
        this.props.addTransfer(this.props.operation);
        this.props.createOperation({sum: ''});
        this.props.changeBalance();
        this.props.showModal();
    }

    render() {
        const { from, fromType } = this.props.operation;
        return (
            <div className="static-modal">
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title> Add an expense </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div>
                        <label htmlFor="originOfMoney">From</label>
                        <select id="originOfMoney" className="form-control">
                            <option>{from}</option>
                            {
                            fromType ? this.props.elements[fromType].filter(el => el.name !== from)
                            .map(el => <option value={el.name} key={_.uniqueId()}>{el.name}</option>) : null
                            }
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amountOfMoney">Amount</label>
                        <br />
                        <input id="amountOfMoney" type='number'
                               className="form-control"
                               onChange={this.handleSumChange} 
                               value={this.props.operation.sum}
                               placeholder='Enter the amount'/>
                    </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.showModal}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}