import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("constructor")
    }
    componentDidMount() {// cdm tab
        //Api İstekleri
        this.setState({
            a:20
        })
        console.log("componentDidMount")
    }
    componentDidUpdate = (prevProps, prevState) => {// cdu tab
        // New props ,state changes, Force Update
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate(){    //shpu tab
        //yazılmadığında true olup render'a geçilmesini sağlar.
        //false rendera geçilmesini engeller Risklidir

        return true;
    }

    
    
    
    render() {
        const {a} = this.state;
        console.log("render",a)

        return (
            <div>
                
            </div>
        )
    }
}
