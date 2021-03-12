import axios from 'axios';
import React, { Component } from 'react';
import posed from 'react-pose';
import UserConsumer from '../context'

const Animation = posed.div({
    
        visible: { 
            opacity: 1,
            applyAtStart : {
                display : "block"
            }
        },
        hidden: { 
            opacity: 0,
            applyAtEnd : {
                display : "none"
            } 
        }

    
});


class AddUser extends Component { // rcc tab

    state = {
        visible : false,
        name : "",
        department : "",
        salary : "",
        error : false

    }
    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    validateForm =() => {
        const {name,department,salary} = this.state;
            if(name === "" || department ===  "" || salary ===  ""){
                return false;
            }
            return true;

    }

   changeInput = (e) => {
       this.setState({
           // inputtaki name = değerini değişken olarak aldık. 
           // targettaki valueya eşitledik. setState ile state değierini değiştirdik
           [e.target.name] : e.target.value
       })
   }
   addUser =async (dispatch,e) => {
    
    e.preventDefault();
    const {name,department,salary,Currency} = this.state;
    const newUser = {
        name,
        department,
        salary,
        Currency
        
    }
    if(!this.validateForm()) {
        this.setState({
            error : true
        })
        return;

    }

    const response = await axios.post("http://localhost:3004/users",newUser);
    dispatch({type: "ADD_USER", payload: response.data})
    
    

    
    this.props.history.push("/");
   }


    render() {
        const {visible,name,salary,department,error} = this.state;
        return <UserConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
                    <div className="col-md-8 mb-4">
        
                    <button onClick={this.changeVisibility} className='btn btn-dark btn-block mb-2'>{visible ? "Hide Form" : "Show Form"}</button>
                    <Animation pose= {visible ? "visible" : "hidden"}>
                    <div className="card">
        
                            <div className="card-header">
                            <h4>Add User Form</h4>
        
                            </div>
                            
                            <div className="card-body">
                            {
                                error ? 
                                <div className="alert alert-danger">Please Check Your Inputs</div>
                                :
                                null
                            }
                                <form onSubmit= {this.addUser.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text"
                                            name= "name"
                                            id = "id"
                                            placeholder = "Enter Name"
                                            className = "form-control"
                                            value = {name}
                                            onChange = {this.changeInput}
                                        
                                        />
                                    </div>
        
                                    <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <input 
                                        type="text"
                                        name= "department"
                                        id = "department"
                                        placeholder = "Enter Department"
                                        className = "form-control"
                                        value = {department}
                                        onChange = {this.changeInput}
                                    
                                    />
        
                                    
        
                                    </div>
        
                                <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input 
                                    type="text"
                                    name= "salary"
                                    id = "salary"
                                    placeholder = "Enter Salary"
                                    className = "form-control"
                                    value = {salary}
                                    onChange = {this.changeInput}
                                
                                />
        
                                
        
                                </div>
                                <button type = "submit" className = "btn btn-danger btn-block">Add User</button>
                                </form>
                            </div>
        
                        </div>
                        </Animation>    
                    </div>
                    
                )

            }
        }
        
        </UserConsumer>
        
        

    }
}

export default AddUser;
