import React from 'react';
import '../../assets/css/stepthree.css';

import { Link } from 'react-router-dom';

class StepThree extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("StepThree");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="stepthree">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>Let's get started with improving your health.</h6>
                                        <p className="pt-3">Your email is your username.</p>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Password</label> 
                                            <input type="password" class="form-control" placeholder="Must be at least 8 characters long."/>
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
export default StepThree;