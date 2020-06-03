import React from 'react';
import { Jumbotron } from "react-bootstrap";

class Welcome extends React.Component {
    render() {
        var text =  "There are four major APIs in Kafka:\n 1)Producer API – Permits an application to publish streams of records.\n 2)Consumer API – Permits an application to subscribe to topics and processes streams of records.\n 3)Connector API – Executes the reusable producer and consumer APIs that can link the topics to the existing applications.\n 4)Streams API – This API converts the input streams to output and produces the result"
        const heading = {
            textAlign:'center',
            color:'white'
        }
        const kick = {
            color:'white'
        }
        const oval = {
            textAlign: 'center'
        }
        return(
            <div>
            <Jumbotron className="bg-dark text-white">
                <h1 style = {oval}>Welcome to Kafka Browser</h1>
                <blockquote className="blockquote mb-0">
                    <p style = {oval}>
                        A Distributed Streaming Platform
                    </p>
                    <footer className="blockquote-footer" style = {oval}>
                        Apache Software Foundation.
                    </footer>
                </blockquote>
            </Jumbotron>
            <h1 style={heading}>Apache Kafka</h1>
            <p style={kick}>Apache Kafka is an open-source stream-processing software platform developed by LinkedIn and donated to the Apache Software Foundation, written in Scala and Java. The project aims to provide a unified, high-throughput, low-latency platform for handling real-time data feeds. Kafka can connect to external systems (for data import/export) via Kafka Connect and provides Kafka Streams, a Java stream processing library. Kafka uses a binary TCP-based protocol that is optimized for efficiency and relies on a "message set" abstraction that naturally groups messages together to reduce the overhead of the network roundtrip. This "leads to larger network packets, larger sequential disk operations, contiguous memory blocks [...] which allows Kafka to turn a bursty stream of random message writes into linear writes."</p>
            <p style={kick}>{text.split("\n").map((i,key) => {return <div key={key}>{i}</div>;})}</p>
            <h3 style={kick}>Use Cases of Apache Kafka</h3>
            <p style={kick}>1.Messaging System</p>
            <p style={kick}>2.Website Activity Tracking</p>
            <p style={kick}>3.Metrics</p>
            <p style={kick}>4.Log Aggregation</p>
            <p style={kick}>5.Stream Processing</p>
            <p style={kick}>6.Event Sourcing</p>
            <p style={kick}>7.Commit Log</p>
            <p style={kick}>To know more about Apache kafka refer Documentation <a href="https://kafka.apache.org/20/documentation.html">https://kafka.apache.org/20/documentation.html</a></p>
            </div>
        );
    }
}

export default Welcome;