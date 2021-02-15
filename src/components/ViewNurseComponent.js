import React, { Component } from 'react'
import NurseService from '../services/NurseService'

export class ViewNurseComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:this.props.match.params.id,
            nurse:[]      
        }
    }
    componentDidMount(){
        var i;
        for(i=(30*((this.state.id)-1)+1);i<(30*(this.state.id)+1);i++){
            NurseService.getNurseById(i).then((res) => {
                this.setState((prevState)=>({nurse:[...prevState.nurse,res.data]}))
            });
           
        }
    
    }
    
    
    render() {
        return (
            <div className="App">
                <div className="left">
                <table className="table table-hover table-dark">
                 <tr>
                   <th>Nurse_1</th>
                   <th>Nurse_2</th>
                   <th>Nurse_3</th>
                   <th>Nurse_4</th>
                   <th>Nurse_5</th>
                   <th>Nurse_6</th>
                   <th>Nurse_7</th>
                   <th>Nurse_8</th>
                   <th>Nurse_9</th>
                   <th>Nurse_10</th>
                   
                 </tr>
                 { this.state.nurse.map(person => 
                   <tr>
                     <td>{person.nurse1}</td>
                     <td>{person.nurse2}</td>
                     <td>{person.nurse3}</td>
                     <td>{person.nurse4}</td>
                     <td>{person.nurse5}</td>
                     <td>{person.nurse6}</td>
                     <td>{person.nurse7}</td>
                     <td>{person.nurse8}</td>
                     <td>{person.nurse9}</td>
                     <td>{person.nurse10}</td>
                     </tr>
                   )}
                 </table>
               </div>    </div>
        )
    }
}

export default ViewNurseComponent
