import React, {Component} from 'react';
import '../styles/nav.css';
import down from '../assets/chevron.svg';
// import down2 from '../assets/chevron2.svg';
// import Bookings from './Bookings.jsx';

class Nav extends Component{   
    // constructor(props){
    //     super(props);
    //     this.nav = this.nav.bind(this);
    // }
    // nav(tab){
    //     const {navigate} = this.props;
    //     navigate(`<${tab} />`)
    //     // navigate()
    // }
    // onClick={() => this.nav("Main")}
    render(){
        return(
        <div id="header">
            <nav>
                <a id="first" href="/">White Peony</a>
                <a href="/bookings">Bookings</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </nav>
        <section>
        <h1>White Peony</h1>
        <a href="#main"><img src={down} id="chevron-down"/></a>
        </section>
        </div>
        )
    }
}
//("Bookings")
export default Nav;