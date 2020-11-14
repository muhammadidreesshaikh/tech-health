import React from 'react';
import '../../assets/css/elligibility.css';
import { Link } from 'react-router-dom';

class Elligibility extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Elligibility");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="elligibility">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h1>Elligibility</h1>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3>Uh oh, looks like we're not in your state just yet...</h3>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6>We don't currently offer treatment in your state. Enter your email to get hear from us when we do.</h6>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group ">
                                            <input type="email" class="form-control mt-4" placeholder="example@email.com" />
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
export default Elligibility;