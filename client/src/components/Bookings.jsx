import React,{Component} from 'react';
import axios from 'axios';
import '../styles/bookings.css';

export default class extends Component{
    constructor(props){
        super(props);
        this.state ={
            bookings:[],
            admin:this.props.value,
            resp:''
        }
    }
    getDat(x){
        return x.getDate();
    }
    componentDidMount(){
        let respNormal = <h1>Bookings</h1>;

        if(this.state.admin === true){
        axios.get('http://localhost:4000/bookings/all').then((result) => {
            // Table Results
            console.log(result.data);
            this.setState({bookings:result.data});

            // Define Table
            let respAdmin = <table>
        <caption><h1>Bookings</h1></caption>
        <tr><th>Date</th><th>Name</th><th>Contact</th><th>Order</th><th>Materials</th><th>Price</th></tr>
        {this.state.bookings.map((key) =>{ return <tr><td>{key.date.slice(11,16) +", "+key.date.slice(8,10)+"/"+key.date.slice(5,7)+"/"+key.date.slice(0,4)}</td><td>{key.name}</td><td>{key.contact}</td><td>{key.order.ordername}</td><td>{key.order.materials}</td><td>{key.order.price}</td></tr>})}</table>;
            this.getDat = this.getDat.bind(this);

            // setState of table
            this.setState({resp:respAdmin}) 
              
        }).catch((err)=>console.log(err));
    }
    else{
        this.setState({resp:respNormal})
    }
    }
    render(){
        return(
            <main id="main">
                {this.state.resp}
            </main>
        );
    }
}