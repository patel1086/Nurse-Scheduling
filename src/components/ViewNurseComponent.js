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
        // let x = parseInt(this.props.location.pathname.split("/")[3]);
        // var arr = new Array();
        // var index =0;
        // while(++index <= x){
        //     arr.push(index);
        // }
        return (
            <div className="App">
                <div className="left">
                <table className="table table-hover table-dark" >
                 <tr>
                   <th>Nurse A</th>
                   <th>Nurse B</th>
                   <th>Nurse C</th>
                   <th>Nurse D</th>
                   <th>Nurse E</th>
                   <th>Nurse F</th>
                   <th>Nurse G</th>
                   <th>Nurse H</th>
                   <th>Nurse I</th>
                   <th>Nurse J</th>
                   
                 </tr>
                 {/* <tr>
                 {arr.map((j)=>{
                     return(
                         <th>Nurse_{j}</th>
                     )
                 })}
                 </tr> */}
                 { this.state.nurse.map(person => 
                   <tr>
                     <td className={person.nurse1=="M"?"text-success":(person.nurse1=="E")?"text-warning":((person.nurse1=="N")?"text-danger":"text-primary")} ><strong>{person.nurse1}</strong></td>
                     <td className={person.nurse2=="M"?"text-success":(person.nurse2=="E")?"text-warning":((person.nurse2=="N")?"text-danger":"text-primary")}><strong>{person.nurse2}</strong></td>
                     <td className={person.nurse3=="M"?"text-success":(person.nurse3=="E")?"text-warning":((person.nurse3=="N")?"text-danger":"text-primary")}><strong>{person.nurse3}</strong></td>
                     <td className={person.nurse4=="M"?"text-success":(person.nurse4=="E")?"text-warning":((person.nurse4=="N")?"text-danger":"text-primary")}><strong>{person.nurse4}</strong></td>
                     <td className={person.nurse5=="M"?"text-success":(person.nurse5=="E")?"text-warning":((person.nurse5=="N")?"text-danger":"text-primary")}><strong>{person.nurse5}</strong></td>
                     <td className={person.nurse6=="M"?"text-success":(person.nurse6=="E")?"text-warning":((person.nurse6=="N")?"text-danger":"text-primary")}><strong>{person.nurse6}</strong></td>
                     <td className={person.nurse7=="M"?"text-success":(person.nurse7=="E")?"text-warning":((person.nurse7=="N")?"text-danger":"text-primary")}><strong>{person.nurse7}</strong></td>
                     <td className={person.nurse8=="M"?"text-success":(person.nurse8=="E")?"text-warning":((person.nurse8=="N")?"text-danger":"text-primary")}><strong>{person.nurse8}</strong></td>
                     <td className={person.nurse9=="M"?"text-success":(person.nurse9=="E")?"text-warning":((person.nurse9=="N")?"text-danger":"text-primary")}><strong>{person.nurse9}</strong></td>
                     <td className={person.nurse10=="M"?"text-success":(person.nurse10=="E")?"text-warning":((person.nurse10=="N")?"text-danger":"text-primary")}><strong>{person.nurse10}</strong></td>
                     </tr>
                   )}
                 </table>
               </div>    </div>
        )
    }
}

export default ViewNurseComponent
