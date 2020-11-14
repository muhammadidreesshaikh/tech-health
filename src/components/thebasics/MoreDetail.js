import React from 'react';
import '../../assets/css/moredetail.css';
import { Link } from 'react-router-dom';

class MoreDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("MoreDetail");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="detail">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body p-0">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="pt-3">Just a few more details...</h3>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label className="change">Social Security Number: </label>

                                            {/* <span className="custom-tooltip ml-2">
                                                <i class="far fa-question-circle"></i>
                                                <div class="tooltip-text">Lorem Ipsum texto de relleno de las imprentas y archivos de texto.</div>
                                            </span> */}

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
export default MoreDetail;