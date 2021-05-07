import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
       
        super(props);
        this.state = {
            mobileData:[],
        };
    }

    /**to do ComponentDidMount */
    componentDidMount() {
        const apiUrl = 'https://krds-assignment.github.io/aoc/api-assets/data.json';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ mobileData: data });
        });
    }

    render() {
        if(this.state.mobileData.length !== 0){
            return (
                <Fragment>
                    <div style={{ 'padding': '20px' }}>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'green', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[0].logo} style={{ 'height': '30px', }} alt="logo0"></img>
                            <p style={{ 'overflow-wrap': 'break-word', 'max-width': '120px' }}>{this.state.mobileData.features[0].title}</p>
                            <img src={this.state.mobileData.features[0].image} style={{ 'padding-left': '120px', 'height': '145px' }} alt="mobile0"></img>
                            <p>{this.state.mobileData.features[0].desc}</p>
                        </div>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'orange', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[1].logo} style={{ 'height': '30px' }} alt="logo1"></img>
                            <h6>{this.state.mobileData.features[1].title}</h6>
                            <img src={this.state.mobileData.features[1].image} style={{ 'padding-left': '150px', 'height': '200px' }} alt="mobile1"></img>
                            <p>{this.state.mobileData.features[1].desc}</p>
                        </div>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'blue', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[2].logo} style={{ 'height': '30px' }} alt="logo2"></img>
                            <h6>{this.state.mobileData.features[2].title}</h6>
                            <img src={this.state.mobileData.features[2].image} style={{ 'padding-left': '150px', 'height': '200px' }} alt="mobile2"></img>
                            <p>{this.state.mobileData.features[2].desc}</p>
                        </div>
                    </div>
                    <div style={{ 'padding': '20px', 'position': 'absolute', 'margin-top': '350px' }}>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'red', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[3].logo} style={{ 'height': '30px' }} alt="logo3"></img>
                            <h6>{this.state.mobileData.features[3].title}</h6>
                            <img src={this.state.mobileData.features[3].image} style={{ 'padding-left': '148px', 'height': '150px' }} alt="mobile3"></img>
                            <p>{this.state.mobileData.features[3].desc}</p>
                        </div>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'pink', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[4].logo} style={{ 'height': '30px' }} alt="logo4"></img>
                            <h6>{this.state.mobileData.features[4].title}</h6>
                            <img src={this.state.mobileData.features[4].image} style={{ 'padding-left': '165px', 'height': '150px' }} alt="mobile4"></img>
                            <p>{this.state.mobileData.features[4].desc}</p>
                        </div>
                        <div style={{ 'float': 'left', 'padding': '20px', 'background-color': 'skyblue', 'max-width': '400px', 'max-height': '400px' }}>
                            <img src={this.state.mobileData.features[5].logo} style={{ 'height': '30px' }} alt="logo5"></img>
                            <h6>{this.state.mobileData.features[5].title}</h6>
                            <img src={this.state.mobileData.features[5].image} style={{ 'padding-left': '40px', 'height': '150px' }} alt="mobile5"></img>
                            <p>{this.state.mobileData.features[5].desc}</p>
                        </div>
                    </div>
                </Fragment>
            );
        }
        else
            return null;
    };
};

export default App;