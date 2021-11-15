import React from "react";
import { Component } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import './index.css'

export default class DataForm extends Component {

constructor(props) {
    super(props)

    this.state = {
        email: "",
        name: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postal: "",
        showData: false
    }

    this.provinceList = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
                        'Newfoundland and Labrador', 'Nova Scotia',
                        'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan' ]

} 
     
    read(item, type) {
        console.warn("value", item.target.value)
        let itemValue = item.target.value
        switch(type)
        {
            case "email": {
                this.setState({email: itemValue})
                break
            }
            case "name": {
                this.setState({name: itemValue})
                break
            }
            case "address": {
                this.setState({address: itemValue})
                break
            }
            case "address2": {
                this.setState({address2: itemValue})
                break
            }
            case "city": {
                this.setState({city: itemValue})
                break
            }
            case "province": {
                this.setState({province: itemValue})
                break
            }
            case "postal": {
                this.setState({postal: itemValue})
                break
            }
            default: {
                break
            }
        }
        console.warn("all", this.state)
    }

    submit() {
        let data = {}
        data.email = this.state.email
        data.name = this.state.name
        data.address = this.state.address
        data.address2 = this.state.address2
        data.city = this.state.city
        data.provinceList = this.state.province
        data.postal = this.state.postal
        this.setState({showData: true})

        console.warn("submit data", data)
    }


    render() {
        return (
            <div className="container">
                <Form action="" method="get">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={((item) => this.read(item, "email"))}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" name="name" onChange={((item) => this.read(item, "name"))} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="1234 Main St" name="address" onChange={((item) => this.read(item, "address"))}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control type="text" placeholder="Apartment, studio, or floor" name="address2" onChange={((item) => this.read(item, "address2"))}/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" onChange={((item) => this.read(item, "city"))}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Province</Form.Label>
                        <Form.Select defaultValue="Choose..." name="province" onChange={((item) => this.read(item, "province"))}>
                            <option>Choose...</option>
                            {
                                this.provinceList.map(name => (
                                <option key={name}>{name}</option>
                                ))
                            }
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control type="text" name="postal" onChange={((item) => this.read(item, "postal"))}/>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="button" className="btn-success" onClick= {() => this.submit()}>
                        Submit
                    </Button>
                </Form>

                { this.state.showData && 
                <div className="float-container"> 
                        <div className="float-child" id="label">
                            <div >Email: {this.state.email}</div> 
                            <div>Name: {this.state.name}</div>
                            <div>Address:{this.state.address2 + ", "} {this.state.address} </div>
                            <div>City: {this.state.city}</div>
                            <div>Province: {this.state.province}</div>
                            <div>Postal: {this.state.postal}</div>
                        </div>
                      
                </div>
                }   
         </div>
        )
        
        
    }
}