import React, { Component } from 'react';
import FallBack from "./FallBack"
class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={error:null, eventId:null}
    }
    componentDidCatch(error,errorInfo){
        this.setState({error:error})
        console.log(errorInfo,error)
    }
    render() {
        if(this.state.error){
            return (<FallBack/>)
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;