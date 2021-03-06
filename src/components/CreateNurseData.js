import React, { Component } from 'react'
import NurseService from '../services/NurseService';

export class CreateNurseData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:this.props.match.params.id,
            totalNurse: '',
            morning:'',
            evening:'',
            night:'',
           // off:''       
        }
        this.changeTotalNurseHandler=this.changeTotalNurseHandler.bind(this);
        this.changeMorningHandler=this.changeMorningHandler.bind(this);
        this.changeEveningHandler=this.changeEveningHandler.bind(this);
        this.changeNightHandler=this.changeNightHandler.bind(this);
        //this.changeOffHandler=this.changeOffHandler.bind(this);
        this.saveNurses=this.saveNurses.bind(this);
        this.cancel=this.cancel.bind(this);

    }
    changeTotalNurseHandler=(event)=>{
        this.setState({totalNurse:event.target.value});
    }

    changeMorningHandler=(event)=>{
        this.setState({morning:event.target.value});
    }

    changeEveningHandler=(event)=>{
        this.setState({evening:event.target.value});
    }

    changeNightHandler=(event)=>{
        this.setState({night:event.target.value});
    }

    saveNurses=(e)=>{
        
        e.preventDefault();
        const value=(parseInt(this.state.totalNurse)-(parseInt(this.state.morning) + parseInt(this.state.night) + parseInt(this.state.evening))).toString();
        //let nurse={totalNurse:this.state.totalNurse, morning:this.state.morning, evening:this.state.evening, night:this.state.night, off:this.state.off};
        let nurse={totalNurse:this.state.totalNurse, morning:this.state.morning, evening:this.state.evening, night:this.state.night, off:value};
        console.log('nurse => '+JSON.stringify(nurse));

        
        NurseService.createNurse(nurse).then(res=>{
            this.props.history.push('/nurses');
        });
    }

    cancel(){
        this.props.history.push('/nurses');
    }
    
    
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Scheduling Details</h3>
                        <div className="card-bpdy">
                            <form>
                                <div className="form-group">
                                    <label>Total: </label>
                                    <input placeholder="Total Nurse" name="totalNurse" className="form-control"
                                        value={this.state.totalNurse} onChange={this.changeTotalNurseHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Morning: </label>
                                    <input placeholder="Total Morning Nurse" name="morning" className="form-control"
                                        value={this.state.morning} onChange={this.changeMorningHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Evening: </label>
                                    <input placeholder="Total Evening Nurse" name="evening" className="form-control"
                                        value={this.state.evening} onChange={this.changeEveningHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Night: </label>
                                    <input placeholder="Total Night Nurse" name="night" className="form-control"
                                        value={this.state.night} onChange={this.changeNightHandler} />
                                </div>
                                <button className="btn btn-success" onClick={this.saveNurses}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CreateNurseData
