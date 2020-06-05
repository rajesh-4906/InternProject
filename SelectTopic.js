import React from 'react';
// import ReactJson from 'react-json-view';
import {Table, Button} from 'react-bootstrap';
import Datahere from './Datahere.json';

class SelectTopic extends React.Component{
    render(props){
        const kick = {
            color:'white'
        }
        console.log(this.props.location)
        return(
            <div>
                <Table striped bordered hover size="lg" variant="dark">
                    <thead>
                        <tr>
                            <th style={kick}>All Topics</th>
                            <th style={kick}>Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Datahere.map(({topic}) => (
                                <tr>
                                    <td style={kick}>
                                        {topic}
                                    </td>
                                    <td>
                                        <Button>
                                            Publish
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <h3 style={kick}>Select which topic you want to publish the below message</h3>
                <p style={kick}>{JSON.stringify(this.props.location.state.content)}</p>
                {/* <ReactJson src={this.props.location.state} theme="monokai" />  */}
            </div>
        )
    }
}

export default SelectTopic