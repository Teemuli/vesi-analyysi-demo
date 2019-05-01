import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export class GraphComponent extends Component{
    constructor (props) {
        super(props);
        this.state = {
            data: [],
        };
    }

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
        //eslint-disable-next-line
        data.map(dat => {
            if(dat.test_id === this.props.currentId)
            databyid.push(dat);
        })
        return (
            <div>
                <LineChart width={500} height={600} data={databyid} position={"right"}>
                    <Line type="monotone" dataKey={"result_uranium"} stroke="#006994" fill="#006994" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time_stamp" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        );
    }
}
export default GraphComponent;