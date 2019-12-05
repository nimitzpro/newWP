import React,{Component} from 'react';
import "../styles/contact.css";
import axios from 'axios';

// axios({
//     method:'post',
//     url:'http://localhost:4000/contact',
//     data:{
//         name:nam,
//         email:emai,
//         phone:phon,
//         question:questio
//     },
//     headers: {'Content-Type': 'multipart/form-data' }
// });


export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:'',
            question:'',
            form:'',
            admin:this.props.value,
            contacts:[]
        }
    }
    componentDidMount(){
        let formNormal = <form onSubmit={this.onSubmit} method="post">
            <input name="name" placeholder="Name" onChange={this.onChange}></input>
            <input name="email" placeholder="E-mail" onChange={this.onChange}></input>
            <input name="phone" placeholder="Phone Number" maxLength="10" onChange={this.onChange}></input>
            <textarea name="question" placeholder="Enter question here" rows="6" onChange={this.onChange}></textarea>
            <input type="submit" value="Send" ></input>
        </form>
        if(this.state.admin === true){
            axios.get('http://localhost:4000/contact').then((result) => {
            this.setState({contacts:result.data});
            let formAdmin = <table>
            <caption><h1>Questions</h1></caption>
            <tr><th>Name</th><th>Email</th><th>Contact</th><th>Question</th></tr>
            {this.state.contacts.map((key) =>{ return <tr><td>{key.name}</td><td>{key.email}</td><td>{key.phone}</td><td>{key.question}</td></tr>})}</table>;

            this.setState({form:formAdmin});
        });
        }
        else{
            this.setState({form:formNormal});
        }
    }
    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }
    onSubmit = (e) =>{
        e.preventDefault()
        // get our form data out of state
        const { name, email, phone,question } = this.state;
        axios.post('http://localhost:4000/contact',{name,email,phone,question}).then((result) =>{
            const formUpdate =  <React.Fragment><h1>Form submitted</h1><h2><a href="/">Back to homepage</a></h2></React.Fragment>;
            this.setState({form:formUpdate});
        })
    }

    render(){
        return(
            <main id="main">
                <section id="contact">
                <h1>Contact</h1>
                {this.state.form}
                
                </section>
            </main>
        );
    }
}   