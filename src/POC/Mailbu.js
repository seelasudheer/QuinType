import React, { Component } from 'react'
import {Form,FormControl,Navbar,NavDropdown,Button ,Nav} from 'react-bootstrap'
import './styles.css'
import Navbars from './Navbars'
import Content from './Content'

export class Mailbu extends Component {
    render() {

        return (
            <div >
                <Navbars/>
                <Content/>
            </div>
        )
    }
}

export default Mailbu
