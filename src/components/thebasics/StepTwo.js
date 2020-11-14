import React from 'react';
import '../../assets/css/steptwo.css';

import { Link } from 'react-router-dom';

class StepTwo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            type: 'male'
        };
    } 

    componentDidMount() {
        console.log("StepTwo");

        this.setState({
            loading: true
        });
    }

    changeType = (value) => {
        this.setState({ type: value });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="steptwo">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>Take control of your health, right form home.</h6>
                                        <h5 className="pt-3">These questios will help us ensure you are eligible for treatment.</h5>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Your birthdate.</label>

                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>

                                            <input type="date" class="form-control" placeholder="MM-DD-YYY"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group mb-0">
                                            <label className="change">Add your biological sex.</label>
                                            
                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>
                                        </div>
                                        
                                        <div className="custom-toggle pt-2">
                                            <ul>
                                                <li 
                                                    className={ this.state.type == 'male' ? 'active' : '' }
                                                    onClick={ () => {this.changeType('male')} }
                                                >
                                                    Male
                                                </li>
                                                <li 
                                                    className={ this.state.type == 'female' ? 'active' : '' }
                                                    onClick={ () => {this.changeType('female')} }
                                                >
                                                    Female
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Mobile Number.</label>

                                            <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span>

                                            <input type="number" class="form-control" placeholder="XXX-XXX-XX"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default StepTwo;