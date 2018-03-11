import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ShowModal extends React.Component {
    
    handleSumChange = e => this.props.createOperation({ sum: e.target.value });

    handleSubmit = e => {
        this.props.addOperation(this.props.operation);
        this.props.addTransfer(this.props.operation);
        this.props.showModal();
    }

    render() {
        //debugger;
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
                        <option>Choose</option>
                        <option value="wallet">Wallet</option>
                        <option value="bankAccount">Bank Account</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="amountOfMoney">Amount</label>
                        <br />
                        <input id="amountOfMoney" type='number'
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