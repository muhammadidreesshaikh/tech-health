import React from 'react';
import '../../assets/css/verification.css';
import { Link } from 'react-router-dom';

class Verification extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Verification");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="verification">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="pt-3">Just a few more details...</h3>
                                        <h5 className="pt-2">We need to verify your identity</h5>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="check-boxs my-3">
                                            <h5>What was the make and model of your first car?</h5>

                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">Ford</label>
                                            </div>

                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">Jeep</label>
                                            </div>

                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label class="form-check-label">Honda</label>
                                            </div>
                                        </div>
                                    </div>  

                                    <span className="text-center">Demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Verification;