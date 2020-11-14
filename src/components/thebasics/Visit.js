import React from 'react';
import '../../assets/css/visit.css';
import { Link } from 'react-router-dom';

import image from '../../assets/img/img1.png'

class Visit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            profileData: ''
        };
    } 

    componentDidMount() {
    }

    changeProfileData = (value) => {
        this.setState({
            profileData: value
        })

        console.log(this.state.profileData);
    }

    render() {
        return(
            <section className="w-100"> 
                <div className="visit">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-12 col-lg-12 p-0">
                                <div className="card-body">
                                    <h6>Let's connect you with a provider.</h6>
                                    <p>Available Appointment:</p>
                                    <strong>Mon, 9/03/2020</strong>

                                    <a onClick={() => { this.changeProfileData('John Semeth') }}>
                                        <div className={'card mt-4 ' + (this.state.profileData == 'John Semeth' ? 'border-selected' : '')}>
                                            <div className="row">
                                                <div className="col-4 col-md-4 col-lg-4">
                                                    <div className="image">
                                                        <img src={image} />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="name">
                                                        <p>John Semeth</p>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="time">
                                                        <p>09:00 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a onClick={() => { this.changeProfileData('Zoye Jashon') }}>
                                        <div className={'card mt-4 ' + (this.state.profileData == 'Zoye Jashon' ? 'border-selected' : '')}>
                                            <div className="row">
                                                <div className="col-4 col-md-4 col-lg-4">
                                                    <div className="image">
                                                        <img src={image} />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="name">
                                                        <p>Zoye Jashon</p>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="time">
                                                        <p>02:00 AM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Visit;