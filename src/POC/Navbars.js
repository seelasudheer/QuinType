import React, { Component } from 'react'
import { Form, FormControl, Navbar, NavDropdown, Button, Nav } from 'react-bootstrap'
import Mail from './quintype.png'
import './styles.css'
import header from './data.json'
export class Navbars extends Component {
  constructor(props) {
    super(props)

    this.state = {
      check: false,
      headers: header.headers
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.setState({
      check: true
    })
  }
  render() {
    var Style={
      backgroundColor: "white",
      boxShadow: "1px 1px 6px 0px grey"
      }
    const { headers, check } = this.state
    return (
      <div style={Style}>
        <div>
          <Navbar collapseOnSelect bg="white"  expand="lg">
            <Navbar.Brand href="#home"><img src={Mail} alt="QuinType" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-auto" >
                {
                  headers.map((x, index) => {
                    return <Nav.Link key={index} href={x.path} ><h5 className="bars">{x.name}</h5></Nav.Link>
                  })
                }
              </Nav>
              <Form inline>
                {check ? <FormControl type="text" placeholder="Search" className="mr-sm-2" /> : ""}
                <a href="#" onClick={() => this.handleSubmit()}><i className="fa fa-search"></i></a>
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Navbar.Collapse>
          </Navbar>

        </div>
      </div>
    )
  }
}

export default Navbars
