import React from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare} from '@fortawesome/free-solid-svg-icons';

class AddingData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {Broker:'', Topic:'', Partition:'', Offset:'', Key:'', Value:''};
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
    }

    submitBook(event) {
        alert('Broker: '+this.state.broker+', Topic: '+this.state.topic+', Partition: '+this.state.partition+", Offset: "+this.state.offset+', Key: '+this.state.key+", Value: "+this.state.value);
        event.preventDefault();
    }


    bookChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return (
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>
                    <FontAwesomeIcon icon={faPlusSquare} /> Add Data
                </Card.Header>
                <Form onSubmit={this.submitBook} id="bookFormId">
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridBroker">
                                <Form.Label>Broker</Form.Label>
                                <Form.Control required
                                    type="test" name="broker"
                                    value={this.state.broker}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Broker Id" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridTopic">
                                <Form.Label>Topic</Form.Label>
                                <Form.Control required
                                    type="test" name="topic"
                                    value={this.state.topic}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Topic Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPartition">
                                <Form.Label>Partition</Form.Label>
                                <Form.Control required
                                    type="test" name="partition"
                                    value={this.state.partition}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Partition Number" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridOffset">
                                <Form.Label>Offset</Form.Label>
                                <Form.Control required
                                    type="test" name="offset"
                                    value={this.state.offset}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Offset Entry" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridKey">
                                <Form.Label>Key</Form.Label>
                                <Form.Control required
                                    type="test" name="key"
                                    value={this.state.key}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Key" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridValue">
                                <Form.Label>Value</Form.Label>
                                <Form.Control required
                                    type="test" name="value"
                                    value={this.state.value}
                                    onChange={this.bookChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Enter Value" />
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
} 

export default AddingData