import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ShowNewElementModal extends React.Component {
    
    handleSumChange = e => this.props.createNewElement({ sum: e.target.value });
    handleNameChange = e => this.props.createNewElement({ name: e.target.value });

    handleSubmit = e => {
        console.log(this.props.newElement);
        this.props.createElement(this.props.newElement);
        this.props.showNewElementModal();
        this.props.createNewElement({ name: '', sum: '' });
    }

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.show}>
                    <Modal.Header>
                        <Modal.Title> Add new element </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div>
                        <label htmlFor="elementName">Name</label>
                        <input id="elementName" className="form-control"
                               onChange={this.handleNameChange} 
                               value={this.props.newElement.name}
                               placeholder='Enter the name' 
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="currentSum">Current sum</label>
                        <br />
                        <input id="currentSum" type='number'
                               onChange={this.handleSumChange} 
                               value={this.props.newElement.sum}
                               placeholder='Enter the sum'/>
                    </div>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button onClick={this.props.showNewElementModal}>Close</Button>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}