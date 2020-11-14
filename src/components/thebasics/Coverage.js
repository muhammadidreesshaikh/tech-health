import React from 'react';
import '../../assets/css/coverage.css';

import { Link } from 'react-router-dom';

class Coverage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            policy: false
        };
    } 

    componentDidMount() {
        console.log("Coverage");

        this.setState({
            loading: true
        });
    }

    changePolicy = (type) => {
        this.setState({
            policy: type
        })
    }

    render() {
        return(
            <section className="coverage w-100"> 
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-12 col-lg-12 p-0">
                            <div className="card-body p-0">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <h6>Let's ensure your visit is covered!</h6>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12">
                                    <div class="form-group">
                                        <label className="change">Who has you covered?</label>

                                        <span className="custom-tooltip ml-2">
                                            <i class="far fa-question-circle"></i>
                                            <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                        </span>

                                        <input type="text" class="form-control" placeholder="Search for your employer"/>
                                    </div>
                                </div>

                                <div className="form-check ml-3">
                                    <input class="form-check-input" type="checkbox" onClick={() => { this.changePolicy(!this.state.policy) }} /> 
                                    <label class="form-check-label">
                                        Not the policy holder? 
                                    </label>

                                    <span className="custom-tooltip ml-2">
                                        <i class="far fa-question-circle"></i>
                                        <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    this.state.policy == true ?
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="change">
                            <div class="form-group">
                                <label className="change">Subscriber Name</label>
                                <input type="text" class="form-control" placeholder="Subscriber Name"/>
                            </div>

                            <div class="form-group">
                                <label className="change">Subscriber Birthday</label>
                                <input type="text" class="form-control" placeholder="Subscriber Birthday"/>
                            </div>

                            <div class="form-group">
                                <label className="change">Subscriber Insurance</label>
                                <input type="text" class="form-control" placeholder="Subscriber Insurance"/>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }

                <div className="checks">
                    <div className="container">
                        <div className="row">
                            <div class="raw">
                                <h4>Entering your employer name didn't work?</h4>
                                <ul>
                                    <li><span className="icon text-success pl-0">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                    <li><span className="icon text-success">&#10003;</span> Lorem Ipsum is not simply random.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Coverage;