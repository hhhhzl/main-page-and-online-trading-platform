import React,{ useState} from "react";
import "./contacts.css";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Row,Container,Col, Form } from "react-bootstrap";
import { Bookmark } from "@material-ui/icons";
import useWindowDimensions from "../../../utils/sizewindow";


const Contacts = () => {
  const [validated, setValidated] = useState(false);
  const {width,height} = useWindowDimensions();


  return (
    <div className="section">
      <br/>
      <h3 className="text-center" style={{color:"gray"}}>COOPERATION</h3>
      <h5 className="text-center" style={{color:" #337ab7 "}}><Bookmark/>{" "}如何加入UFA</h5>
      <br/>
      <div className="bottom-cover-picture animated">
    <Image
      src = "/合作添加背景图.png"
      title="Cover image"
      alt="views in the World"     
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }}
    />
    <div className="overlay" />

    
      {/* <div className="text-center">
        <h5 style={{color:"white"}}>UFA核心团队也招贤纳士</h5>
        <br/>
        <p style={{color:"white"}}>
          我们欢迎有想法、有野心、有资源、有公众号排版技能的同学加入，成为合伙人，享受一切UFA资源，为你的简历增贴色彩！
        </p>
        <hr/>
        </div> */}
       
    
    
  </div>

  <div className='cover-corperation'>
    <br/>
    <div className="section">
    <h3 className="text-center" style={{color:"gray"}}>COOPERATION</h3>
      <h5 className="text-center" style={{color:" #337ab7 "}}><Bookmark/>{" "}合作伙伴</h5>
      <br/>

      <div className="contact-center">
        {width < 600 ? 

        (<><Col>
          <div className ="cooperation-box">
          <Row>
            <Col xs={4}>
              <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {8}>
                <div>
                  <h6 style={{color:" #337ab7 "}}></h6><p>
          “跨界UFA” （论坛小程序，这里人人都是自媒体）   </p>
        </div>
        </Col>
        </Row>
    
        </div>
        </Col>
        <Col>
          <div className ="cooperation-box">
          <Row>
            <Col xs={4}>
              <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {8}>
                <div>
                <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
        </Col>
        </Row>
    
        </div>
        </Col>
        <Col>
          <div className ="cooperation-box">
          <Row>
            <Col xs={4}>
              <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {8}>
                <div>
                <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
        </Col>
        </Row>
    
        </div>
        </Col>
        <Col>
          <div className ="cooperation-box">
          <Row>
            <Col xs={4}>
              <Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
              </Col>
              <Col xs = {8}>
                <div>
                <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
        </Col>
        </Row>
    
        </div>
        </Col>
        </>)
        :
        (<>
        <Row>

<Col>
<div className ="cooperation-box">
  <Row>
  <Col xs={4}>
<Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
</Col>
<Col xs = {8}>
  <div>
  <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
</Col>
</Row>

</div>
</Col>
<Col>
<div className ="cooperation-box">
<Row>
  <Col xs={4}>
<Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
</Col>
<Col xs = {8}>
  <div>
  <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
</Col>
</Row>

</div>
</Col>
</Row>

<Row>

<Col>
<div className ="cooperation-box">
<Row>
  <Col xs={4}>
<Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
</Col>
<Col xs = {8}>
  <div>
        <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
</Col>
</Row>

</div>
</Col>
<Col>
<div className ="cooperation-box">
<Row>
  <Col xs={4}>
<Image src = "/head.jpeg" title="head image" id="img-txz" alt="header" roundedCircle style={{position: "relative", width: "100%",height: "100%",}}/>
</Col>
<Col xs = {8}>
  <div>
  <h6 style={{color:" #337ab7 "}}></h6>
        <p>
          “跨界UFA” （论坛小程序，这里人人都 
        </p>
        </div>
</Col>
</Row>

</div>
</Col>
</Row>
        </>)
        
      }

      
    </div>
    </div>
  </div>

  <div>
    <br/>
    <div className="section">
    <h3 className="text-center" style={{color:"black"}}>联系我们</h3>
      <h4 className="text-center" style={{color:" #337ab7 "}}>—Contact Us—</h4>
      <br/>
      <Form className= "contact-form" noValidate validated={validated} id="addProject">
        <Form.Group as={Row}>
          <Col xs={3}>
            <Form.Control
              required
              value={''}
              placeholder='姓名'
            ></Form.Control>
            </Col>
            <Col xs={3}>
            <Form.Control
            required
              type="number"
              value={''}
              placeholder='电话'
            ></Form.Control>
          </Col>
          <Col xs={3}>
            <Form.Control
            required
              type="number"
              value={''}
              placeholder='留言'
            ></Form.Control>    
          </Col>
          <Col xs={2}>
          <Button
              variant="danger"
              style={{width:"100%"}}
            >
              提交
            </Button> 
            </Col>
        </Form.Group>
      </Form>
    </div>
    <Image src = "/contact.jpg" title="head image" id="img-txz" alt="contact"  style={{position: "relative",marginLeft:"5%", width: "90%",height: "100%",}}/>
    </div>


    </div>
  );
};

export default Contacts;
