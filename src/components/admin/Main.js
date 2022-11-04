import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: ""
       }
   }
   componentDidMount(){
       axios.get('https://aqueous-plateau-25203.herokuapp.com/task/all').then(response => {
           //handle success
           this.setState({
               data:  response.data
           }, ()=> console.log(response.data) )         

       })
       .catch(function (error) {
           //handle error
           if(error.response){
               console.log(error.response.data)
               this.setState({loginError: error.response.data.message})
           }
           else{
               console.log(error)
           }
           
       });

   }
    
    
    render() {
        return (
            <Dashboard  data= {this.state.data}/>
            
        )
    }
}

export default Main
