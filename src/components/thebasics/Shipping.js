import React from 'react';
import '../../assets/css/shipping.css';

import Bag from '../../assets/img/bag.png'

import { Link } from 'react-router-dom';

class Shipping extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Shipping");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="shipping">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body">
                                    <h6>Let's get you your supplies!</h6>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row list">
                                            <div className="col-4 col-md-4 col-lg-4">
                                                <img src={Bag} /> 
                                            </div>

                                            <div className="col-8 col-md-8 col-lg-8">
                                                <ul>
                                                    <li><span className="icon text-success pl-0">&#10003;</span>Free Shipping</li>
                                                    <li><span className="icon text-success">&#10003;</span>Guaranted Pricing</li>
                                                    <li><span className="icon text-success">&#10003;</span>Single-dose packing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <form>
                                        <div class="form-group pt-5">
                                            <label className="change">Shipping Address</label>
                                            <input type="address" class="form-control" placeholder="Street Address" />
                                        </div>
                                        <div class="form-group">
                                            <input type="floor" class="form-control" placeholder="Apt/Suite/Floor" />
                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Shipping;