import  React, { Component }  from "react"

class Main  extends Component {

    constructor(props){
        super(props);
        this.state={
            allCustomers: []
        }
    }
    // 
    componentDidMount(){
        fetch("http://localhost:3030/customers")
        .then( data=> {
            return  data.json();
        })
        .then(resolvedData=>{
                this.setState({
                    allCustomers:resolvedData
                });
        });
    }

    render(){
        return (
            <main>
                <h2>Customers List</h2>
                {
                    this.state.allCustomers.map( (customer, i) => {
                        return  <div  key={i}>
                            {customer.username}&nbsp;
                            {customer.password}
                        </div>
                    }) 
                }
            </main>
        )
    }

}

export  default Main