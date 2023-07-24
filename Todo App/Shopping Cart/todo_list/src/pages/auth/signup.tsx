import React from "react";
import "../../css/main.css"; // Import your custom CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser ,faKey} from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
const Signup = () => {
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center "
        style={{
          minHeight: "100vh"
        }}
      >
        <Row className="  ">
          <Col md={{ span: 10, offset: 1 }}>
            <Row className="border border-2 rounded ">
              <Col md={6} xs={12} className="pl-0 pr-0">
                <img
                  src="https://entrackr.com/storage/2020/03/flipkart-grocery-image.jpg"
                  alt="company logo"
                  className="img-fluid custom-image rounded-start  "
                ></img>
              </Col>
              <Col md={6} className="    rounded-end border-start-0">
                <Form>
                  <Row className="g-2 mt-2">
                    <Col md={6}>
                      <FloatingLabel
                        controlId=""
                        label="First name"
                      >
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="First name"
                        />
                      </FloatingLabel>
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId=""
                        label="Last name"
                      >
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={6}>
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
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <FloatingLabel
                          controlId=""
                          label="Email"
                        >
                          <Form.Control
                            type="text"
                            name="email"
                            placeholder="Last name"
                          />
                        </FloatingLabel>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                        <FloatingLabel
                          controlId=""
                          label="Password"
                        >
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder=""
                          />
                        </FloatingLabel>
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <FloatingLabel
                          controlId=""
                          label="Confirm Password"
                        >
                          <Form.Control
                            type="text"
                            name="password2"
                            placeholder="Last name"
                          />
                        </FloatingLabel>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form.Check
                            type="checkbox"
                            name="policy"
                            inline label="I accept the Terms of Use & Privacy Policy"
                        />
                    </Col>
                  </Row>
                  <Row className="g-2 mt-2">
                    <Col md={12} className="d-grid">
                      <Button variant="primary" type="button">
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <Row className="g-2 mt-4">
                  <Col md={{ span: 8, offset:  3}}>
                    <span>Already have an account?<a href="/">Login here</a></span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
