import React, { Component } from 'react';
import PropTypes from 'prop-types'; //impt Tab
import UserConsumer from "../context";
import axios from 'axios';
import {Link} from 'react-router-dom';

class User extends Component {
    // Static Default Props
    static defaultProps = {
      Currency: 'USD',
      salary: 1000,
      department: 'Bilişim'
    }
    //
    /* değer yakalama {this.onClickEvent.bind(this,35)}
    onClickEvent = (number,e) =>{ // önce gönderdiğimiz değeri sonra eventi gönderir
      console.log(number); // 35 yazdırır
      

    }
    */
    //State Oluşturma Yöntem 1

    /*
    constructor(props){
      super(props);
      this.state = {
        isVisiable : false
      }
    }
    */

    onClickEvent = (e) => {
      this.setState({
        isVisiable : !this.state.isVisiable
      })
    }

    //State Oluşturma Yöntem 2
    
    state = {
      isVisiable : false
    }
    onDeleteUser =async (dispatch,e) =>{
      const {id}= this.props;

      //Delete Request
        await axios.delete(`http://localhost:3004/users/${id}`)
      //Consumerdan Dispatch
      dispatch({

        type : "DELETE_USER",
        payload:id
      });
    }
    componentWillUnmount() { //cwun
      //Component kaldırıldığında çalışıyor
        //console.log("Component will Unmount")  
    }
    
    

  

    render() {
      //State
      const {isVisiable} = this.state;

      //Destructing
      const {id,name,department,salary,Currency} = this.props;

      return (
        <UserConsumer>
        {
          value => {
            const {dispatch} = value;

            return (
              <div className= "col-md-8 mb-4">
              
              <div className="card" style = {isVisiable ? {backgroundColor : "#53b7d2", color : "#FFFFFF" } : null}>
                <div className="card-header d-flex justify-content-between">
                  <h4 className = "d-inline" onClick = {this.onClickEvent}>{name}</h4>
                  <i onClick={this.onDeleteUser.bind(this,dispatch)} className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>
                </div>
      
                
                {
                  isVisiable ? 
                  
                  <div className="card-body">
                    <p className="card-text">Maaş: {salary + " " + Currency}</p>
                    <p className="card-text">Departmant: {department}</p>
                    <Link to = {`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                  </div> 
      
                  : null 
                }

              </div>
              </div>
            );



          }
        }
        
        </UserConsumer>
      )

     


    }
  }
User.types = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.number.isRequired,
  Currency : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired


  
}

  export default User;

