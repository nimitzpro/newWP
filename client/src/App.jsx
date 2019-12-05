import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import Bookings from './components/Bookings.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.handleNavigate = this.handleNavigate.bind(this);
    //     this.state = { comp : <Main />}
    // }
    // handleNavigate(handleTab){
    // let comp2 = <{handleTab}/>;
    // this.setState(({comp:comp2}),()=>console.log(this.state.comp));
    // }

    render(){
        // Sets admin = true/false
        const admin = true;
        return(
            <React.Fragment>
                {/* <NAV navigate={this.handleNavigate}/>
                {this.state.comp} */}
                <Nav />
                <Router>
                    <Route exact path="/" render={() => <Main />} />
                    <Route path="/bookings" render={() => <Bookings value = {admin}/>} />
                    <Route path="/services" render={() => <Services />} />
                    <Route path="/contact" render={() => <Contact value = {admin}/>} />
                </Router>
                <Footer />
            </React.Fragment>
        );

    }
}

export default App;