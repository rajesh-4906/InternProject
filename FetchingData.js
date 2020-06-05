import React from 'react';
import {Table, Row, Col, Container, Button, Form} from 'react-bootstrap';
import Datahere from './Datahere.json';
import ReactJson from 'react-json-view';
import {Link} from 'react-router-dom';


function Clickable(props){
    const {
        children, eventHandler
    } = props;
    return (
        <div className="Clickable" onClick={eventHandler} >
            {children}
        </div>
    )
}

class FetchingData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {broker:'Broker101', topic:'Test1', partition:'0', offset: 0, active_content: {}};
        this.submitData = this.submitData.bind(this);
        this.bookChange = this.bookChange.bind(this);
    }
    submitData(event) {
        alert('Broker: '+this.state.broker+', Topic: '+this.state.topic+', Partition: '+this.state.partition+", Offset: "+this.state.offset);
        event.preventDefault();
    }
    bookChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    
    render() {
        const heading = {
            textAlign:'center',
            color:'white'
        }
        const kick = {
            color:'white'
        }
    
        return (
            <Form  onSubmit= {this.submitData} id="kafkaFormId">
                <Container>
                   
                    <Row>
                    <view style={{ marginTop:22}}><h1 style={kick}>KAFKA-BROWSER</h1></view>
                        <Col>
                        <label style={kick} >Broker</label>
                        <select name="broker" id="broker" className="form-control" onChange={this.bookChange} >
                            <option value="Broker101" >Broker101</option>
                            <option value="Broker102" >Broker102</option>
                        </select>
                        </Col>
                        <Col>
                        <label style={kick} >Topic</label>
                        <select name="topic" id="topic" className="form-control" onChange={this.bookChange} >
                            <option value="Test1">Test1</option>
                            <option value="Test2">Test2</option>
                            <option value="Test3">Test3</option>
                        </select>
                        </Col>
                        <Col>
                        <label style={kick} >Partition</label>
                        <select name="partition" id="partition" className="form-control" onChange={this.bookChange} >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        </Col>
                        <Col>
                        <label style={kick} >Offset range (1-50)</label>
                        <input type="text" name="offset" id="offset" className="form-control" onChange={this.bookChange} >
                        </input>
                        </Col>
                        <view style={{ marginTop:31}}><Button variant="success" type="submit">Submit</Button></view>
                    </Row>
                </Container>
                <h6 style={heading}>You are searching for [ Broker : {this.state.broker}, Topic : {this.state.topic}, partition : {this.state.partition} ]</h6>
                
                <Table striped bordered hover size="lg" variant="dark">
                    <thead>
                        <tr>
                            <th style={kick}>Offset</th>
                            <th style={kick}>Key</th>
                            <th style={kick}>Value</th>
                            <th style={kick}>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        {
                            Datahere.map(({id,title,content,slug}) => (
                            <tr>
                                <td style={kick}>{id}</td>
                                <td style={kick}>{title}</td>
                                <Clickable eventHandler={() => this.setState({active_content: content})}>
                                    <td style={kick}>{JSON.stringify(content)}</td>
                                </Clickable>
                                <td>
                                    <Link to={{
                                        pathname:'/top',
                                        state: {
                                            content
                                        }
                                    }}>TopicLog</Link>
                                </td>
                            </tr>
                            ))
                        }

                        

                        {/* <tr>
                            <td style={kick}>0</td>
                            <td style={kick}>Not Assigned</td>
                            <td style={kick}>{Datahere}</td>
                        </tr>
                        <tr>
                            <td style={kick}>1</td>
                            <td style={kick}>Not Assigned</td>
                            <td style={kick}>["id":2,"first_name":Rajesh,"last_name":Dasari,"email":rajesh@gmail,"gender":male]</td>
                        </tr>
                        <tr>
                            <td style={kick}>2</td>
                            <td style={kick}>Not Assigned</td>
                            <td style={kick}>["id":3,"first_name":Mounika,"last_name":Dasari,"email":mouni@gmail,"gender":female]</td>
                        </tr> */}
                    </tbody>
                </Table>
                <ReactJson src={this.state.active_content} theme="monokai" />
            </Form>
        );
    }
}

export default FetchingData