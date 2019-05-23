import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Switch from 'react-switch' 

export default class New extends Component {
    constructor(){
        super()
        this.state ={

        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(checked){
        this.setState({checked})
    }
    render() {
        return (
            <div>
                <h2>Toggle Switch </h2>
                <Switch className="react-switch" onChange={this.handleChange} checked={this.state.checked}/>
                <p>This switch is <b>{this.state.checked ? 'on': 'off'}</b>  </p>
            </div>
        )
    }
}
