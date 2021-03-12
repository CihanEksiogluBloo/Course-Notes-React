import React, { Component } from 'react';
import PropTypes from 'prop-types'; //impt Tab


class User2 extends Component {

    static defaultProps = {
      Currency: 'USD',
      salary: 1000,
      department: 'Bilişim'
    }


    onClickEvent = (e) => {
      this.setState({
        isVisiable : !this.state.isVisiable
      })
    }

    state = {
        users: [
            {
                id : "unique-1",
                name : "Cihan",
                salary : "10000",
                department : "bilişim",
                Currency : "USD"

            },
            {
                id : "uniq 2",
                name : "Aytuğ",
                salary : "11000",
                department : "bilişim",
                Currency : "USD"

            },
            {
                id : "uniq 3",
                name : "Aykut",
                salary : "12000",
                department : "bilişim",
                Currency : "USD"

            }

        ]
    }

    render() {
      //State
      const {isVisiable} = this.state;

      //Destructing
      const {name,department,salary,Currency} = this.props;
      return (
        <div className= "col-md-8 mb-4">
        
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className = "d-inline" onClick = {this.onClickEvent}>{name}</h4>
            <i className="fas fa-trash-alt" style={{cursor:"pointer"}}></i>
          </div>

          
          {
            isVisiable ? 
            
            <div className="card-body">
              <p className="card-text">Maaş: {salary + " " + Currency}</p>
              <p className="card-text">Departmant: {department}</p>
            </div> 

            : null 
          }
              
           
              
              
            

        </div>
        
       
          
          
        </div>
      );
    }
  }

User2.types = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.number.isRequired,
  Currency : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired
}

  export default User2;

