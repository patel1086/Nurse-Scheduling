import React, { Component } from 'react'

export class ListNurseComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nurses:[]
        }
    }
    
    render() {
        return (
            <div>
               <h2 className="text-center">Nurse List</h2> 
               <div className="row">
                   <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
               </div>
               <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th> Total Nurse</th>
                               <th> Morning Nurse</th>
                               <th> Evening Nurse</th>
                               <th> Night Nurse</th>
                               <th> Holiday Nurse</th>
                               <th> Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.nurses.map(
                                   nurse=>
                                   <tr key={nurse.totalNurse}>
                                       <td>{nurse.morning}</td>
                                       <td>{nurse.evening}</td>
                                       <td>{nurse.night}</td>
                                       <td>{nurse.off}</td>
                                       <td>
                                           <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info" >Update</button>
                                           <button onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                           <button onClick={()=>this.viewEmployee(employee.id)} className="btn btn-info" style={{marginLeft:"10px"}}>View</button>
                                       </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
        )
    }
}

export default ListNurseComponent
