import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ShowModal extends React.Component {

    closeModal = (e) => {
        e.preventDefault();
        this.setState({show: false});
      }
    
    render() {
        debugger;
        return (
            <div className="static-modal">
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title> Add an expense </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div>
                        <label for="originOfMoney">From</label>
                        <select id="originOfMoney" class="form-control">
                        <option>Choose</option>
                        <option value="wallet">Wallet</option>
                        <option value="bankAccount">Bank Account</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label for="amountOfMoney">Amount</label>
                        <br />
                        <input id="amountOfMoney" type='number' 
                            //  value='' onChange={this.handleChange} 
                            placeholder='Enter the amount'/>
                    </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.showModal}>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}