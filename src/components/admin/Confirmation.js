import React, { Component } from 'react'
import { update } from '../../utils/postData'
import AdminNavbar from './AdminNavbar'

export class Confirmation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: null,
             message:""
        }
    }
    
    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.id
        this.setState({id: id})
        const formData={status: "Accepted", id: id}
        const result =  update(formData).then(result => {
        if(result.data){
            this.setState({message: result.data.message})
                        
            }
        }).catch (error => {
            if(error.response){
                console.log(error.response.data)
                
            }
            else{
                console.log(error)
            }
        }) 
            
        }
            //         
        
                     
                
    
    render() {
        return (
            <div>
                <AdminNavbar/>
                <h4>{this.state.message}</h4>
            </div>
        )
    }
}

export default Confirmation
