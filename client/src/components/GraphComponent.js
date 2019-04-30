import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export class GraphComponent extends Component{

    state = {
        data: [],
    };

    componentDidMount() {
        this.getDataFromDb();
    }
    
    getDataFromDb = () => {
        fetch("api/getData")
          .then(data => data.json())
          .then(res => this.setState({ data: res.data }));
    };

    render() {
        const { data } = this.state;
        var databyid = [];
        data.map(dat => {
            if(dat.test_id === this.props.currentId)
            databyid.push(dat);
        })
        return (
            <div>
                <LineChart width={600} height={600} data={databyid} position={"right"}>
                    <Line type="monotone" dataKey="result_manganese" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="test_id" />
                    <YAxis />
                </LineChart>
            </div>
        );
    }
}
export default GraphComponent;