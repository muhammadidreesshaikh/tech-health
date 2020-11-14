import React from 'react';
import '../../assets/css/main.css';
import { Link } from 'react-router-dom';

import BackArrow from '../../assets/img/back-arrow.png'
import Close from '../../assets/img/close.png'

import StepOne from '../../components/thebasics/StepOne';
import Elligibility from '../../components/thebasics/Elligibility';
import StepTwo from '../../components/thebasics/StepTwo';
import StepThree from '../../components/thebasics/StepThree';
import Coverage from '../../components/thebasics/Coverage';
import MoreDetail from '../../components/thebasics/MoreDetail';
import Verification from '../../components/thebasics/Verification';
import Covered from '../../components/thebasics/Covered';
import Health from '../../components/thebasics/Health';
import HealthPay from '../../components/thebasics/HealthPay';
import Shipping from '../../components/thebasics/Shipping';
import Billing from '../../components/thebasics/Billing';
import Visit from '../../components/thebasics/Visit';
import Confirmation from '../../components/thebasics/Confirmation';

class Main extends React.Component {

    

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            step: 1
        };
    } 

    componentDidMount() {
        console.log("Main");

        this.setState({
            loading: true
        });
    }

    nextStep = () => {
        if (this.state.step < 13) {
            this.state.step += 1;

            this.setState({
                state: this.state.step
            });
        }
    }

    backStep = () => {
        if (this.state.step > 1) {

            this.state.step -= 1;
            this.setState({
                state: this.state.step
            });
        }
    }

    render() {
        return(
            <section> 
                <div className="main">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="row inner">

                                    <div className="col-6 col-md-6 col-lg-6">
                                       <a className="help" href="#">HELP?</a>
                                    </div>

                                    <div className="col-6 col-md-6 col-lg-6">
                                       <span className="close">
                                           <img src={Close} />
                                       </span>
                                    </div>

                                    <div className="back-btn col-2 col-md-2 col-lg-2" 
                                        onClick={ ()=> {this.backStep()} }
                                    >
                                        <img src={BackArrow} />
                                    </div>

                                    <div className="col-10 col-md-10 col-lg-10">
                                        <h1 className="text-center pt-4">
                                            { this.state.step >= 1 && this.state.step <=3 ? 'The Basics': null }
                                            { this.state.step == 4 || this.state.step == 5 ? 'Your Coverage' : null }
                                            { this.state.step == 6 ? 'ID Verification' : null }
                                            { this.state.step == 7 ? 'Coverage' : null }
                                            { this.state.step == 8 || this.state.step == 9 ? 'Your Health' : null }
                                            { this.state.step == 10 ? 'Shipping Information' : null }
                                            { this.state.step == 11 ? 'Billing Information' : null }
                                            { this.state.step == 12 ? 'Schedule Your Visit' : null }
                                            { this.state.step == 13 ? 'Confirmation' : null }
                                        </h1>
                                    </div>

                                    {/* <div className="back-btn" onClick={ ()=> {this.backStep()} }>
                                        <img src={BackArrow} />
                                    </div> */}

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className={ this.state.step >= 1 ? 'active seprator' : 'seprator'}></div>
                                    </div>

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className={ this.state.step >= 2 ? 'active seprator' : 'seprator'}></div>
                                    </div>

                                    <div className="col-4 col-md-4 col-lg-4">
                                        <div className={ this.state.step >= 3 ? 'active seprator' : 'seprator'}></div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h4 className="pt-3">
                                            { this.state.step >= 1 && this.state.step <=12 ? 
                                                    `STEP ${this.state.step} OF 12`
                                                    : 
                                                    'ALMOST THERE' 
                                            }
                                        </h4>
                                    </div>
                                    
                                    { this.state.step == 1 ? <StepOne /> : null }
                                    { this.state.step == 2 ? <StepTwo /> : null }
                                    { this.state.step == 3 ? <StepThree /> : null }
                                    { this.state.step == 4 ? <Coverage /> : null }
                                    { this.state.step == 5 ? <MoreDetail /> : null }
                                    { this.state.step == 6 ? <Verification /> : null }
                                    { this.state.step == 7 ? <Covered /> : null }
                                    { this.state.step == 8 ? <Health /> : null }
                                    { this.state.step == 9 ? <HealthPay /> : null }
                                    { this.state.step == 10 ? <Shipping /> : null }
                                    { this.state.step == 11 ? <Billing /> : null }
                                    { this.state.step == 12 ? <Visit /> : null }
                                    { this.state.step == 13 ? <Confirmation /> : null }

                                    {/* <Elligibility /> */}
                                    

                                    <div className="col-12">
                                        {
                                            this.state.step == 1 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                CONTINUE
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 2 || this.state.step == 4 || this.state.step == 5 || this.state.step == 7 || this.state.step == 9 || this.state.step == 10 || this.state.step == 11 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                Next
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 3 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                GET STARTED
                                            </a>
                                            : null
                                        }
                                        
                                        {
                                            this.state.step == 6 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                ADD TO CARD
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 8 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                COMPLETE
                                            </a>
                                            : null
                                        }

                                        {
                                            this.state.step == 12 ?
                                            <a 
                                                onClick={ ()=> {this.nextStep()} }
                                                className="bg-green w-100 d-block text-center mt-2 font-weight-bold">
                                                CONSULT WITH A PROVIDER
                                            </a>
                                            : null
                                        } 


                                        <p className="text-center pt-4">By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>

                                        <h6 className="text-center pt-3">Already have an account?</h6>
                                        <div className="signin pt-1 text-center">
                                            <a href="#">Sign-in</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="logo">
                                    <h1>LOGO</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Main;