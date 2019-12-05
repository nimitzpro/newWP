import React,{Component} from 'react';
// import Iframe from 'react-iframe';
import '../styles/main.css';
// const fb = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWhite-Peony-1840429606020079%2F%3Fref%3Dbr_rs&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";

class Main extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         fb:''
    //     }
    // }
    // componentDidMount(){
    //     const iframe = <Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWhite-Peony-1840429606020079%2F%3Fref%3Dbr_rs&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500"  scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="mkek" display="initial"/>
    //     this.setState({fb:iframe});
    // }
    render(){
        return(
            <main id="main" className="main">
                <section>
                    <h1>Welcome to the White Peony site!</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>
                <section>
                    <h1>Welcome to the White Peony site!</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>
                <section>
                    <h1>Welcome to the White Peony site!</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </section>
                {/* {this.state.fb} */}
            </main>
        )
    }
}

export default Main;