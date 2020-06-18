import React, { Component } from 'react'
import { Card, Button, Image, Col, Form, Modal } from "react-bootstrap";
import Trump from './imageTrump2.jpg'
import JennyImage from './JennyImage.PNG'
// import korea from './summit.jpg'
import svg from './next.png'

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        check:true,
        getHeight:document.documentElement.clientWidth  
        }
        this.callme=this.callme.bind(this) 
    }
    componentDidMount(){
        window.addEventListener('resize',this.callme)
    }
    callme(){

        var w = document.documentElement.clientWidth;
        this.setState({
           getHeight:w 
        })
       // console.log("Dasd",w);
        if(w==768||w===751){
            this.setState({
            check:false
            })
        }else{
             this.setState({
                check:true
                })
        }
        
    }
   
    render() {

        return (
            <div  >
                <div><br />
                    <h5 className="text">This is New News</h5>
                    <h1 className="text" style={{ color: "black" }}>Home</h1>
                </div>  <br />
                <div>
                    <h3><b>Politics</b></h3>
                 <hr className="horizon"/>
                   <br/> 
            
                        <div className="row">
                            {/* <br /> */}
                            <div className="edge col-md-6 col-lg-4 col-xl-4" >
                             
                                <div className="bannerImage" >
                                <img className="img_res img-fluid"  variant="top" src={Trump} />
  <div className="content">
    <h3 className="textimage"><strong>Lin-Manuel Miranda says Donald Trump is spreading 'a virulent strain of a virus</strong></h3>
    <p className="textimage2">Jonnathan Doe</p>
  </div>
</div>
                                   

                                <br />
                            </div>
                            <div className=" edge col-md-6 col-lg-4 col-xl-4" >
                                <Card className="backGround" style={{borderRadius:"0rem",border:"0px"}}>
                                    <Card.Img variant="top" src={JennyImage} />
                                    <Card.Body className="body1" style={{padding:"17px"}}>
                                        <Card.Text className="makeFont1"><span><strong>
                                            Jenny Lawson is Publishing a New Book and It's Sort of a Coloring Book</strong></span>
                                        </Card.Text>
                                        <footer  >
                                            <span  className="footer1">Jonnathan Doe</span>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                                <Card className="backGround" style={{borderRadius:"0rem",border:"0px"}}>
                                    <Card.Body  className="body1" style={{padding:"17px"}}>
                                        <Card.Text className="makeFont"><span><strong>
                                            Airtel Offers 3 GB Free Data A Month
                                               To Customers Who Switch To Its 4G Service</strong></span>
                                        </Card.Text>
                                        <footer  >
                                            <span  className="footer1">Alice Doe</span>
                                        </footer>
                                    </Card.Body>
                                </Card><br/>
                            </div>




                            <div className=" col-lg-4 col-xl-4 col-md-12">
                              <div className="row">
                                  <div className={this.state.getHeight==1024?"col-xl-12 col-md-12":" col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"}>
                                    <Card className="cardView" style={{ border: "none",backgroundColor:"rgba(232, 232, 232, 0.10)" }}>
                                        <Card.Body  style={{padding:"0px"}}>
                                            <Card.Text>
                                                <h6 className={this.state.getHeight<=425?"backGround3":this.state.check?"backGround2":"backGround1"}
                                                >
                                                    Airtel Offers 3 GB Free Data A Month
                                                    To Customers Who Switch To Its 4G Service
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1" >
                                                <span >Alex Parkinson</span>
                                            </footer>
                                            <hr />
                                        </Card.Body>
                                    </Card>
                                    </div>
                               <div className={this.state.getHeight==1024?"col-xl-12 col-md-12 col-sm-6":" col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"} 
                              >
                                    <Card className=" cardView" style={{ border: "none",backgroundColor:"rgba(232, 232, 232, 0.10)" }}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text  >
                                                <h6 className={this.state.getHeight<=425?"backGround3":this.state.check?"backGround2":"backGround1"}> 
                                                    Warning Letter For Ankaleshwar Plant Sends Wockhardt
                                                    Shares To Near 2.5- Year Low
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1" >
                                                <span >Alice Doe</span>
                                            </footer>
                                            <hr />
                                        </Card.Body>
                                    </Card>
                                    </div>
                               <div className={this.state.getHeight==1024?"col-xl-12 col-md-12":"col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"}>
                                    <Card className="cardView" style={{ border: "none", backgroundColor:"rgba(232, 232, 232, 0.10)"}}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text >
                                                <h6 className={this.state.getHeight<=425?"backGround3":this.state.check?"backGround2":"backGround1"}>
                                                    Sundar Pichai Launches `Digital Unlocked` Programme
                                               </h6>
                                            </Card.Text>
                                            
                                            <footer className="footer1">
                                                <span >Jonnathan Doe</span>
                                            </footer>
                                            {(this.state.getHeight>=751 &&this.state.getHeight<=974) ?<></>:<hr/>}
                                        </Card.Body>
                                    </Card>
                                    </div>
                                    <div className={this.state.getHeight==1024?"col-xl-12 col-md-12":"  col-xl-12 col-lg-12 col-md-6 col-sm-6 col-xs-12"}
                                   >
                                    {/* backgroundColor:"#e8e8e8" */}
                                    <Card className="cardView" style={{ border: "none",backgroundColor:" rgba(232, 232, 232, 0.10)" }}>
                                        <Card.Body  style={{padding:"0px"}} >
                                            <Card.Text >
                                                <h6 className={this.state.getHeight<=425?"backGround3":this.state.check?"backGround2":"backGround1"}>
                                                Warning Letter For Ankaleshwar Plant Sends Wockhardt
                                                    Shares To Near 2.5- Year Low
                                               </h6>
                                            </Card.Text>
                                            <footer className="footer1">
                                                <span >Alice Doe</span>
                                            </footer>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                   {this.state.getHeight<=425?<h5 class="read"><b>Read more
                                   &nbsp; <img src={svg} width="50px" height="16px" alt="das"/></b>
                                    </h5>:<></>}
                                </div>
                         <br/>
                            </div>
                        </div>
                 

                </div>
            </div>
        )
    }
}

export default Content
