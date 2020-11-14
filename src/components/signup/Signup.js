import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/signup.css';
import Logo from '../../assets/img/logo.png'

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Signup");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <div className="signup">
                    <div className="container">
                        <div className="row">
    
                            <div className="col-12 col-md-7 col-lg-7">
                                <div className='logo'>
                                   <img src={Logo} />
    
                                   <div className="inner">
                                    <h3>Bringing high-tech health home to you</h3>
                                    <div className="seprator mt-3"></div>
                                    <p className="pt-3">Get matched with the right program, straight from home.</p>
                                   </div>
                                </div>
                            </div>
    
                            <div className="col-12 col-md-5 col-lg-5">
                                <div className="card-body">
    
                                    <h2 class="text-center">Sign Up</h2>
                                    <button type="submit" className="btn btn-danger w-100 mt-4 ">SIGN-IN WITH MYCHART</button>
                                    <h6 class="text-center pt-2">Forget Password?</h6>
                                    <h5 class="text-center pt-3">OR</h5>
                                    
                                    <form>
                                        <div class="form-group pt-5">
                                            <label className="change">Full Name</label>
                                            <input type="name" class="form-control" placeholder="First and Last Name" />
                                        </div>
                                        <div class="form-group">
                                            <label className="change">Email</label>
                                            <input type="email" class="form-control" placeholder="exapmle@email.com" />
                                        </div>
                                    </form>
    
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <Link to="/main" submit className="bg-green w-100 d-block mt-3 font-weight-bold">CONTINUE</Link>
                                            <p class="text-center pt-4">By continuing, you agree to accept our Privacy Policy & Terms of Service.</p>

                                            <div className="pt-2">
                                                <a className="help" href="#">Help?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default Signup;