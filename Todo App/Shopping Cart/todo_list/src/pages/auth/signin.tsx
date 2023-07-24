import React from "react";
import { Container,Row,Col,Form,InputGroup,Button,FloatingLabel} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser ,faKey ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "../../css/main.css"
import { Link } from "react-router-dom";

const Signin = ()=>{
    return (<>
    <div className="bgImage">
        <Container className=" d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
            <Row className="g-2 mt-2">
            <Col md={{ span: 12, offset: 0 }}>
            <Row className="border border-2 rounded ">
              <Col md={12} className="">
                <Row className="g-2 mt-2">
                    <Col md={{span:8,offset:4}}>
                      <h2 className="text-light">Login</h2>
                    </Col>
                </Row>
                <Form>
                  <Row className="g-2 mt-2">
                    <Col md={{span:12 ,offset:0}} className="">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <FloatingLabel
                          controlId=""
                          label="Username"
                        >
                          <Form.Control
                            type="text"
                            name="userName"
                            placeholder="First name"
                          />
                        </FloatingLabel>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={{span:12 ,offset:0}} className="">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                        <FloatingLabel
                          controlId=""
                          label="Password"
                        >
                          <Form.Control
                            type="text"
                            name="password"
                            placeholder="First name"
                          />
                        </FloatingLabel>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={{span:6 ,offset:3}} className="text-center">
                      <a href="/" className="link-light ">Forgot Password ?</a>
                    </Col>
                    <Col md={{span:8 ,offset:2}} >
                      <span className="text-light">Don't have an account ? </span><Link to="/signup" className="link-light">Sign Up</Link>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2 mb-2">
                    <Col className="d-grid">
                      <Button variant="primary" type="submit">Login</Button>
                    </Col>
                  </Row>
                </Form>
                
              </Col>
            </Row>
          </Col>
            </Row>
        </Container>
    </div>

    </>)
}
export default Signin